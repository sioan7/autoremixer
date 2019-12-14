import os
import librosa
import soundfile
import numpy as np
from pysndfx import AudioEffectsChain

static_path_temp = '../frontend/remixer-ui/public/'


def prepare_sound(file):
    y, sr = soundfile.read(file)
    return librosa.to_mono(y), sr

def save_file(filename, y, sr):
    new_filename = filename.split('.')[0] + '.wav'
    filepath = os.path.join(static_path_temp, new_filename)
    soundfile.write(filepath, y, sr, subtype='PCM_24')
    return new_filename

# Pitch enhancer
def remix_type1(file, filename):
    y, sr = prepare_sound(file)
    y_third = librosa.effects.pitch_shift(y, sr, n_steps=4)
    return save_file(filename, y_third, sr)

# Voice enhancer
def remix_type2(file, filename):
    y, sr = soundfile.read(file)
    d = librosa.stft(y)
    d_harmonic, d_percussive = librosa.decompose.hpss(d)
    ny = librosa.istft((d_harmonic * 0.5 + d_percussive * 10) * 0.1)
    return save_file(filename, ny, sr)

# Voice separator
def remix_type3(file, filename):
    y, sr = soundfile.read(file)
    S_full, phase = librosa.magphase(librosa.stft(y))
    S_filter = librosa.decompose.nn_filter(
        S_full,
        aggregate=np.median,
        metric='cosine',
        width=int(librosa.time_to_frames(2, sr=sr))
    )
    S_filter = np.minimum(S_full, S_filter)
    margin_i, margin_v = 2, 10
    power = 3
    # mask_i = librosa.util.softmask(
    #     S_filter,
    #     margin_i * (S_full - S_filter),
    #     power=power
    # )
    mask_v = librosa.util.softmask(
        S_full - S_filter,
        margin_v * S_filter,
        power=5
    )
    S_foreground = mask_v * S_full
    # S_background = mask_i * S_full
    D = S_foreground * phase
    # D = S_background * phase
    # D = (S_foreground - S_background) * phase
    # D = S_full * phase
    return save_file(filename, librosa.istft(D), sr)

# Bass remover
def remix_type4(file, filename):
    y, sr = soundfile.read(file)
    y_filt = librosa.effects.preemphasis(y)
    return save_file(filename, y_filt, sr)

# Drunken
def remix_type5(file, filename):
    y, sr = soundfile.read(file)
    fx = (
        AudioEffectsChain()
        .highshelf()
        .reverb(reverberance=75)
        .phaser(gain_in=0.9, gain_out=0.5, delay=1, decay=0.5)
        .delay()
        .lowshelf()
    )
    return save_file(filename, fx(y), sr)


def remix_type6(file, filename):
    y, sr = soundfile.read(file)
    fx = (
        AudioEffectsChain()
        .highshelf()
        .reverb(reverberance=75)
        .phaser(gain_in=0.9, gain_out=0.5, delay=1, decay=0.5)
        .delay()
        .lowshelf()
    )
    return save_file(filename, fx(y), sr)
