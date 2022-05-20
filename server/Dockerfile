FROM python:3.9-slim

WORKDIR /app

ENV FLASK_APP = app.py

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5003

CMD ["python", "app.py"]
