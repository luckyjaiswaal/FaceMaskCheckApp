"""
application.py
- creates a Flask app instance and registers the database object
"""

from flask import Flask
from flask_cors import CORS


def create_app(app_name='MACEMASKDETECT_API'):
    app = Flask(app_name)
    CORS(app)
    app.config.from_object('facemaskdetect.config.BaseConfig')

    from facemaskdetect.api import api
    app.register_blueprint(api, url_prefix="/api")

    from facemaskdetect.models import db
    db.init_app(app)

    return app
