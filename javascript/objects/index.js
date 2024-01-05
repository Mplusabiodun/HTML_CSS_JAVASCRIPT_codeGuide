        /*OBJECT
            let object { key: value,
                key: value,
                'key key': value
                }*/

                let user = {}; //this initialization is the same thing as the user2
                // let user2 = new Object ();
        user["name"] = "Abiodun";
        user.subject = "GST208";
                // object inside an object
        user.bio = {
          department: "Civil Engineering",
          university: "FUTMINNA",
          "level adviser": "Engr. Fatai M. A.",
          status: "Student",
        };
        user["level"] = 200;
        user.school = "SIPET";
        user["admission year"] = 2022;
        console.log(user);
                // console.log(user.school);
                // console.log(user["admission year"]);
        
        // updating object
        user.name = "Adeyemi Ruqoyahh";
        user.school = "NURSING";
        user["admission year"] = 2017;
                // console.log(user[school]);
                // console.log(user.name);
                // console.log(user["admission year"]);
        
        let user3 = {
                name: "fatai",
                subject: "CIE202",
                level: 200,
                school: "SIPET",
                "admission year": 2022,
                bio: {
                    department: "Civil Engineering",
                    university: "FUTMINNA",
                    "level adviser": "Engr. Fatai M. A.",
                    status: "Student",
                },
            };
                    // console.log(user3);
                    // console.log(user3.subject);
                    // console.log(user3["admission year"]);
            //getting keys and values in an object
                    // console.log(Object.values(user3));
                    // console.log(Object.keys(user3));