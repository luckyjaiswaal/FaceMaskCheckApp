import tensorflow as tf
import keras
from tensorflow.keras.models import model_from_json
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing.image import load_img
import numpy as np
import argparse
import cv2
import os
import matplotlib.pyplot as plt
import base64
from PIL import Image
import io

def facemask_detect(image_string):

    '''
    base64 experiment
    '''

    image = base64.b64decode(image_string) 

    imagePath = ("facemaskdetect/services/fmaskdetect/detect.jpg")
    img = Image.open(io.BytesIO(image))
    img.save(imagePath, 'jpeg')


    '''
    '''

    with open('facemaskdetect/services/fmaskdetect/model.json', 'r') as f:
        loaded_model_json = f.read()
    model = model_from_json(loaded_model_json)
    model.load_weights("facemaskdetect/services/fmaskdetect/model.h5")
    print("Loaded model from disk")
    face_cascade = cv2.CascadeClassifier('facemaskdetect/services/fmaskdetect/haarcascade_frontalface_default.xml')

    img = "facemaskdetect/services/fmaskdetect/detect.jpg"   # Add path here
    
    img = plt.imread(img,format='8UC1')
    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.05, 10)
    face_detect = 0
    # Draw the rectangle around each face
    for (x, y, w, h) in faces:

        face = img[y:y+h, x:x+w]
        face = cv2.resize(face, (224, 224))
        face = img_to_array(face)
        face = preprocess_input(face)
        face = np.expand_dims(face, axis=0)
        (mask, withoutMask) = model.predict(face)[0]
        mask = mask*100
        withoutMask = withoutMask*100
    
        font = cv2.FONT_HERSHEY_SIMPLEX
    
        # Getting Text Size in pixel
        print("Image Width: " , w)
        textSize = cv2.getTextSize(text="No Mask: " + str("%.2f" % round(mask, 2)), fontFace=cv2.FONT_HERSHEY_SIMPLEX, fontScale=1, thickness=3)
        print("Text Width: " , textSize[0][0])
    
        if mask > withoutMask:
            cv2.putText(img,
                        text = "Mask: " + str("%.2f" % round(mask, 2)),
                        org = (x-5,y-15),
                        fontFace=font,
                        fontScale = (2*w)/textSize[0][0],
                        color = (0, 255, 0),
                        thickness = 3,
                        lineType = cv2.LINE_AA)
            cv2.rectangle(img, (x, y), (x+w, y+h), (0,255,0), 5)
            face_detect = 1
        else:
            cv2.putText(img,
                        text = "No Mask: " + str("%.2f" % round(withoutMask, 2)),
                        org = (x-5,y-15),
                        fontFace=font,
                        fontScale = (1.8*w)/textSize[0][0],
                        color = (255, 0, 0),
                        thickness = 3,
                        lineType = cv2.LINE_AA)
            cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 5)
            face_detect = 0

    # Display
    #plt.imshow(img)
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    encoded_string = base64.b64encode(img)
    cv2.imwrite("facemaskdetect/services/fmaskdetect/facemask_2_detect.jpg",img)
    return face_detect, encoded_string


'''
if __name__ == "__main__":
    facemask_detect()
'''