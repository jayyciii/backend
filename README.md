## Bắt đầu bằng cách chạy lần lượt các câu lệnh phía dưới để cài đặt các thư viện cần thiết

npm i / npm i --force
npm i next@latest

## Tạo mới tệp .env trong thư mục gốc và config như sau:

``` 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Z3JhbmQtc2FsbW9uLTI1LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_0m1NvzBaFhkmyP8vbu7UWHEjgME5pXIWGFuDCrDFVf
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_API_URL=http://localhost:3000/api
ECOMMERCE_STORE_URL = http://localhost:3001

MONGODB_URL="mongodb+srv://hunga5160:hunga5160@cluster0.0uxnqct.mongodb.net/Borcella_Admin"

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=ddbod5k0w

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_51Off11Lr7bePVHUL7tiH4aqGAPYIskJIPGwWZMoMYEFinQWjVEnWe0LspdW2ZJ42kazuTAj5JRafOp916mIHSi9D00XjOUqeml
NEXT_PUBLIC_STRIPE_SECRET_KEY = sk_test_51Off11Lr7bePVHULGqE0ruhmrZh0g7qiODH0BUKBwEtLR7NSB9v3t4A8un5nGQZAqBHKjHvUcL0Oo3iMPYoO8CNN00eUfak8Kp


STRIPE_WEBHOOK_SECRET = whsec_5bf77f677d3fd51fa403acf5b958ea833e283ae2d1502e1f44aa0ceb37021802
```

