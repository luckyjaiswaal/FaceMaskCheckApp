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

required_fields = {'users':['is_authority' 'first_name', 'last_name', 'password']}


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(191), nullable=False)
    last_name = db.Column(db.String(191), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.utcnow)
    updated_date = db.Column(db.DateTime, default=datetime.utcnow)


    def __init__(self, first_name, last_name, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = generate_password_hash(password, method='sha256')

    def to_dict(self):
        return {
            'user_id':self.user_id,
            'email':self.email,
            'first_name': self.first_name,
            'last_name': self.last_name
        }
    
    @classmethod
    def authenticate(cls, **kwargs):
        email = kwargs.get('email')
        password = kwargs.get('password')
        
        if not email or not password:
            return None

        user = cls.query.filter_by(email=email).first()
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

            'user_id' : self.user_id,
            'email':self.email,
            'first_name': self.first_name,
            'last_name': self.last_name
        }

class Venue(db.Model):
    __tablename__ = 'venues'

    venue_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE')) 
    venue_name = db.Column(db.String(255), nullable=False)
    venue_capacity = db.Column(db.String(255), nullable=False)
    authority_name = db.Column(db.String(255), nullable=False)
    authority_contact = db.Column(db.String(255), nullable=False)
    auth_code = db.Column(db.String(255), nullable=False)


    def __init__(self, user_id, venue_name, venue_capacity, authority_name, authority_contact, auth_code):
        self.user_id = user_id
        self.venue_name = venue_name
        self.venue_capacity = venue_capacity
        self.authority_name = authority_name
        self.authority_contact = authority_contact
        self.auth_code = auth_code

    def columns_to_dict(self):
        dict_ = {}
        for key in self.__mapper__.c.keys():
            dict_[key] = getattr(self, key)
        return dict_


class Visitor(db.Model):
    __tablename__ = 'visitors'

    v_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    venue_id = db.Column(db.Integer, db.ForeignKey('venues.venue_id', ondelete='CASCADE')) 
    facemask_check = db.Column(db.Integer, nullable=False)
    visitor_name = db.Column(db.String(255), nullable=False)
    visitor_id = db.Column(db.Integer, nullable=False)
    visitor_temp = db.Column(db.Numeric, nullable=False)
    temp_check = db.Column(db.Integer, nullable=False)
    check_in = db.Column(db.Integer, nullable=False )
    visit_time = db.Column(db.DateTime, default=datetime.utcnow)


    def __init__(self, venue_id, facemask_check, visitor_name, visitor_id, visitor_temp, temp_check, check_in):

        self.venue_id = venue_id
        self.facemask_check = facemask_check
        self.visitor_name = visitor_name
        self.visitor_id = visitor_id
        self.visitor_temp = visitor_temp
        self.temp_check = temp_check
        self.check_in = check_in

    def columns_to_dict(self):
        dict_ = {}
        for key in self.__mapper__.c.keys():
            dict_[key] = getattr(self, key)
        return dict_







