type x = {
    name: string,
    phone: string,
}

type y = {
    name: string,
    email: string,
}

type z = x & y;

console.log('hello world')