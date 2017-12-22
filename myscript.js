var persons = [
            {
            name: 'John',
            surname: 'Müller',
            age: 26,
            myPhoto: "images/boy01.jpg",    
            likes: 1   // numeric property used to store likes
            },
            
            {
            name: 'Jane',
            surname: 'Smith',
            age: 25,
            myPhoto: "images/girl01.jpg",   
            likes: 2    // numeric property used to store likes
            },

            {
            name: 'Maxima',
            surname: 'Schneider',
            age: 23,
            myPhoto: "images/girl02.jpg",   
            likes: 3    // numeric property used to store likes
            },

            {
            name: 'Moritz',
            surname: 'Meister',
            age: 32,
            myPhoto: "images/boy02.jpg",    
            likes: 4    // numeric property used to store likes
            },
];


        $(".like1").click(function(){
            var plusLike = 1;
            var plusLike = (plusLike+persons[0].likes);
            console.log(plusLike);
            persons[0].likes = plusLike;
            var plusLike =  $("#num1").html(plusLike);
        });

        $(".like2").click(function(){
            var plusLike = 1;
            var plusLike = (plusLike+persons[1].likes);
            console.log(plusLike);
            persons[1].likes = plusLike;
            var plusLike =  $("#num2").html(plusLike);
        });

        $(".like3").click(function(){
            var plusLike = 1;
            var plusLike = (plusLike+persons[2].likes);
            console.log(plusLike);
            persons[2].likes = plusLike;
            var plusLike =  $("#num3").html(plusLike);
        });

        $(".like4").click(function(){
            var plusLike = 1;
            var plusLike = (plusLike+persons[3].likes);
            console.log(plusLike);
            persons[3].likes = plusLike;
            var plusLike =  $("#num4").html(plusLike);
        });

$("#name0").append( persons[0].name);
$("#surname0").append( persons[0].surname);
$("#age0").append( persons[0].age);
$('#image0').html('<img src='+persons[0].myPhoto+'>');

$("#name1").append( persons[1].name);
$("#surname1").append( persons[1].surname);
$("#age1").append( persons[1].age);
$('#image1').html('<img src='+persons[1].myPhoto+'>');

$("#name2").append( persons[2].name);
$("#surname2").append( persons[2].surname);
$("#age2").append( persons[2].age);
$('#image2').html('<img src='+persons[2].myPhoto+'>');

$("#name3").append( persons[3].name);
$("#surname3").append( persons[3].surname);
$("#age3").append( persons[3].age);
$('#image3').html('<img src='+persons[3].myPhoto+'>');

