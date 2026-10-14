export default class params{
    static userdata(){
        return [
            
                {name:"practice",password:"SuperSecretPassword!",testid:"01"},
                {name:"practice",password:"SuperSecretPassword!",testid:"02"},
                {name:"practice",password:"SuperSecretPassword!",testid:"03"},
                
                
            
        ]
    }
    static postdata(){
        return [
            {
                username: "newuser",
                password: "newuser@123",
                languages: ["Java", "TypeScript", "Playwright"],
                data: [
                    {
                        name: "Ravi",
                        height: "5.8"
                    },
                    {
                        name: "Priya",
                        height: "5.5"
                    }
                ]
            }
        ];
    }
    static userdata2(){
        return [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555 123 4567"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 555 987 6543"
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 555 222 3333"
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "+1 555 444 5555"
  },
  {
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    phone: "+1 555 666 7777"
  }
];
    }
    

}

