language: node_js
node_js: node
deploy:
  provider: heroku
  api_key: //this isn't correct not sure how to get this part
    secure: Wofp+W6Plv6cQSvUbHRo8bGghDAu8nahVIR8JQBd2gBb5l4Rana6HeQ1O+NBrN6Mfyq6u7VYmG01PiBiPjJspboWM/S86Mr9Ku2a4TdOGet92al62q9PHjWzuUGFoRdvlZC9hh4M0QIqNHAe9HD7KXDRNiXEFoDv2iDR/nT4UGaTLwiHCF7fsEVKdZF89AlbuLVChHlEDx++C9gV0z94iWW7QQo84S0X+iu0cgeAiVgMbySGAFAiUVCAbozA6rBufDf4RRnxKI4CfL+2ujF9JWqktiK3twWAUzW7+tX+kmASs968riqseSoNk6kDZhVwa7CZrToa4w5UaSzdSBFgSdlMFL8ZOjyySTRq3eh32x5ZdtNSpJRBgBKlOff8GnPfez1U9YDS568sy4nLHJ+VGzfT1Ukki17FS1UyX1vIcp0jbqRaO2jf5KK7Iuef4hswD8f2j3/sX/JXhXMj2O90ij8dOTEaTnxRWyFvTD8+QkshbwYEwkg73iuzqSM5JhistVsVUHMqGdzYFjOsokvulCkf861BwpFDtE6yHjGXQZ9YT/F88HTBaUuC5/Hq16y+Ji8f1eWknG3QDqvasKcAhZAz37hRfBUPBAcKxdLp4ASJNqLhOEwNOfzczt9Ee8ku43s0i2mAwCoiQeug6oiOJyL/VXfaac3XFmqxgwbfIVU=
  app: ancient-tundra-76982
  on:
    repo: jhull1/blog-app-challenge-mongoose-solution



mongoimport -h ds151864.mlab.com:51864 -d blog-app -c posts  -u dbuser -p password2 --file /Users/julie/Desktop/Dev\ Projects/blog-app-mongoose-challenge-solution/seed-data.json 



    mongoimport -h ds229552.mlab.com:29552 -d blog-app-test -c posts  -u dbuser -p password2 --file /Users/julie/Desktop/Dev\ Projects/blog-app-mongoose-challenge-solution/seed-data.json 
