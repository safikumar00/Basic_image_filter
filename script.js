

        function submit() {
            var li = document.getElementById('link').value;
            document.getElementById('pic').src = li;
            document.getElementById('pic1').src = li;
        }

        function bru() { document.getElementById('pic1').style.filter = "blur(1px)"; }
        function contrast() { document.getElementById('pic1').style.filter = "sepia(50%)"; }
        function grayscale() { document.getElementById('pic1').style.filter = "grayscale(40)"; }
        function vintage() { document.getElementById('pic1').style.filter = "blur(0.05em) saturate(0.7) contrast(1.5) brightness(1.2)"; }
        function saturate() { document.getElementById('pic1').style.filter = "saturate(2)"; }

