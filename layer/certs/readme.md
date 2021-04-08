# Redis certs

Folder to have redis certs required for auth will get injected at deployment time from github secrets and workflows. Then a layer will get created and stitched with all the lambdas.

REDIS_PROD_CA_CRT
REDIS_PROD_SERVER_CRT
REDIS_PROD_SERVER_KEY
