var members = [
    "Saurabh Dalmia", "Varsha Dalmia", "Ritvija Dalmia", "Vedant Dalmia"];

    var images_of_family_members = [
        "dad.png", "Mom.jpeg", "sister.jpeg", "Me.webp"];

        var i = 0
        function next_family_member() {
            document.getElementById("names").innerHTML = members[i];

            document.getElementById("album"). src=images_of_family_members[i];
            i++;

            if(i==4){
                i=0;
            }
        }