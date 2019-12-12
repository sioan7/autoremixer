import os
import librosa
import soundfile


static_path_temp = '../frontend/remixer-ui/public/'


def save_file(filename, y, sr):
    new_filename = filename.split('.')[0] + '.wav'
    filepath = os.path.join(static_path_temp, new_filename)
    soundfile.write(filepath, y, sr, subtype='PCM_24')
    return new_filename

def remix_type1(file, filename):
    y, sr = soundfile.read(file)
    y_third = y
    # y_third = librosa.effects.pitch_shift(y, sr, n_steps=0)
    return save_file(filename, y_third, sr)

def remix_type2(file, filename):
    y, sr = soundfile.read(file)
    y_third = librosa.effects.pitch_shift(y, sr, n_steps=4)
    return save_file(filename, y_third, sr)

def remix_type3(file, filename):
    y, sr = soundfile.read(file)
    y_third = librosa.effects.pitch_shift(y, sr, n_steps=4)
    return save_file(filename, y_third, sr)
