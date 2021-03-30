
"""
    config.py
    - settings for the flask application object
    -place inside FaceMaskCheckApp/api/facemaskdetect
"""

class BaseConfig(object):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://wholesal_ss3b:ZkEjU5uFR7z7@115.70.228.70:3306/wholesal_ss3b'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SECRET_KEY = "dd02dbe50eb41792067d9d650cd3ba58df0c90c6466ccea7"