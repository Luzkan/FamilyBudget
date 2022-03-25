FROM python:3.10.3-slim

ENV PYTHONUNBUFFERED 1
ENV TERM xterm-256color

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user
WORKDIR /home/user/app/backend

RUN apt-get update && apt-get install gcc build-essential libpq-dev -y && \
    python3 -m pip install --no-cache-dir pip-tools && \
    apt-get install nano -y

ADD /backend/requirements.in /home/user/app/backend/
ADD /backend/requirements-dev.in /home/user/app/backend/
RUN pip-compile requirements.in > requirements.txt && \
    pip-compile requirements-dev.in > requirements-dev.txt

RUN pip install -r requirements.txt && \
    pip install -r requirements-dev.txt  && \
    pip install psycopg2-binary

RUN apt-get purge libpq-dev -y && apt-get autoremove -y && \
    rm /var/lib/apt/lists/* rm -rf /var/cache/apt/*

ADD backend/ /home/user/app/backend

USER user

CMD python manage.py runserver 0.0.0.0:8000
