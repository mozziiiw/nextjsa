git pull
yarn run build
pm2 delete "6amMart-web-next-js-dev"
pm2 start npm --name "6amMart-web-next-js-dev" -- start
