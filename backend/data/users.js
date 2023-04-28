import bcrypt from 'bcryptjs'
const users=[{
    name:'Admin user',
    email:'info@kalacademy.org',
    password:bcrypt.hashSync('12345',10),
    isAdmin:true
},
{
    name:'John Doe',
    email:'john@kalacademy.org',
    password:bcrypt.hashSync('12345',10),
   
},
{
    name:'ramya',
    email:'ramya@kalacademy.org',
    password:bcrypt.hashSync('12345',10),
    
}
]
export default users