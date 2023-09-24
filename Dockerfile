FROM node:19
# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# ENV PATH=$PATH:/home/node/.npm-global/bin 

RUN mkdir -p /home/node
COPY  . /home/node

WORKDIR /home/node
RUN npm install
RUN npm run build

EXPOSE 3000
USER node

CMD ["npm","run", "serve"]