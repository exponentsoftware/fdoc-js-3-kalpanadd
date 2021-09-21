// a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.

// newuser = {
//     _id: "fg12cy",
//     username: "Asab_k",
//     email: "asab_k@asab.com",
//     password: "123456",
//     createdAt: "17/05/2019 9:30 AM",
//     isLoggedIn: true,
// }

const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "17/05/2019 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "17/05/2019 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "17/05/2019 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "17/05/2019 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "17/05/2019 10:00 AM",
        isLoggedIn: false,
    },
];

// const signup = (new_user) => {
//     let check = 0;
//     for (let user of users) {
//         if (user.username == new_user.username && user.email == new_user.email) {
//             check++;
//             return "User already exists";
//         }
//     }
//     if (check == 0) {
//         users.push(new_user);
//         console.log(users);
//         return "new user added";
//     }
// };

// console.log(signup(newuser));



// b. Create a function called ***signIn*** which allows user to sign in to the application

const signIn = (user_details) => {
    for (let user of users) {
        if (user.email == user_details.email && user.password == user_details.password) {
            user.isLoggedIn = true;
            return "Welcome " + user.username;
        }
    }
    return "Email or Password incorrect";
};

const user_details = {
    email: "alex@alex.com",
    password: "123123",
};
console.log(signIn(user_details));