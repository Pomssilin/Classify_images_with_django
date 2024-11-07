from django.shortcuts import render
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import load_img, img_to_array
import numpy as np
import tensorflow as tf
import io
import os

# Load the classification model
model = load_model(os.path.join('model', 'Image_classify.keras'))

# Categories for classification
data_cat = [
    'apple', 'banana', 'beetroot', 'bell pepper', 'cabbage', 'capsicum', 'carrot', 
    'cauliflower', 'chilli pepper', 'corn', 'cucumber', 'eggplant', 'garlic', 'ginger', 
    'grapes', 'jalapeno', 'kiwi', 'lemon', 'lettuce', 'mango', 'onion', 'orange', 
    'paprika', 'pear', 'peas', 'pineapple', 'pomegranate', 'potato', 'radish', 
    'soy beans', 'spinach', 'sweetcorn', 'sweetpotato', 'tomato', 'turnip', 'watermelon'
]

def result(request):
    result, confidence = None, None  # Initialize empty results
    if request.method == 'POST' and 'image' in request.FILES:
        image_file = request.FILES['image']  # The form field name should be 'image'

        # Convert to BytesIO for loading with `load_img`
        img = load_img(io.BytesIO(image_file.read()), target_size=(180, 180))
        
        # Image preprocessing
        img_array = img_to_array(img)
        img_batch = tf.expand_dims(img_array, 0)  # Add batch dimension

        # Make a prediction
        predictions = model.predict(img_batch)
        score = tf.nn.softmax(predictions[0])

        # Prediction result
        result = f"Vegetable/Fruit in image: {data_cat[np.argmax(score)]}"
        confidence = f"Prediction confidence: {np.max(score) * 100:.2f}%"

    # Render the upload page with results if available
    return render(request, 'classify/result.html', {'result': result, 'confidence': confidence})

def home(request) : 
    return render(request, 'classify/home.html')