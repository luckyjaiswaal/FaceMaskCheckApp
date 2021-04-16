"""
models.py
- Data classes for the crisismgmt application
"""

from datetime import datetime
from dateutil import parser
from flask import current_app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import INTEGER
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from .services.misc import datetime_to_str, parse_datetime
import jwt

db = SQLAlchemy()

required_fields = {'users':['student_id', 'is_authority' 'first_name', 'last_name', 'password']}


class User(db.Model):
    __tablename__ = 'users'

    student_id = db.Column(db.Integer, primary_key=True)
    is_authority = db.Column(db.Integer)
    first_name = db.Column(db.String(191), nullable=False)
    last_name = db.Column(db.String(191), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.utcnow)
    updated_date = db.Column(db.DateTime, default=datetime.utcnow)


    def __init__(self, student_id, is_authority, first_name, last_name, email, password):
        self.student_id = student_id
        self.is_authority = is_authority
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = generate_password_hash(password, method='sha256')
    
    
    @classmethod
    def authenticate(cls, **kwargs):
        student_id = kwargs.get('student_id')
        password = kwargs.get('password')
        
        if not student_id or not password:
            return None

        user = cls.query.filter_by(student_id=student_id).first()
        if not user or not check_password_hash(user.password, password):
            return None

        return user

    @classmethod
    def decode_auth_token(cls, token):
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(token, current_app.config['SECRET_KEY'])
            return payload['sub']
        except Exception:
            return 'Invalid token. Please log in again.'

    def to_dict(self):
        return {
            'student_id':self.student_id,
            'email':self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'is_authority': self.is_authority
        }


class Defaulter(db.Model):
    __tablename__ = 'defaulter'

    student_id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    snapshot_id = db.Column(db.Integer)

    def __init__(self, student_id, timestamp, snapshot_id):
        self.student_id = student_id
        self.snapshot_id = snapshot_id







