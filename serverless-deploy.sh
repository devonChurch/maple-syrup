export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

echo "apples = $APPLES"
echo "NODE_ENV = $NODE_ENV"

serverless deploy
