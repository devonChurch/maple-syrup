export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

echo "AWS key = $AWS_ACCESS_KEY_ID"
echo "AWS secret = $AWS_SECRET_ACCESS_KEY"
echo "apples = $APPLES"

serverless deploy
