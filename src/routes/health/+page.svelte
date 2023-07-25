

    <div class="happy">


        <img src="/images/happy.jpeg" alt="">
        
        
            <h1>Blood Health, and Its Crucial Impact on Donations.</h1>
            <p> Healthy blood is essential for life. It delivers necessary substances such as nutrients and oxygen to the cells and transports metabolic waste products away from those same cells. Healthy blood is characterized by balanced levels of red and white blood cells, platelets, and plasma. It also means having normal hemoglobin levels, proper blood pressure, absence of bloodborne diseases, and the ability for blood to clot properly. Maintaining healthy blood involves a balanced diet, regular exercise, avoiding harmful habits, and getting regular health check-ups <a href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"> Source 1,</a> <a href="https://www.cdc.gov/workplacehealthpromotion/tools-resources/workplace-health/blood-pressure.html"> Source 2</a>.</p>
            <h2> Below is a visual that shows the 4 most important parts of blood, and how it effects our body and donations: </h2>


    </div>

    <div class="infographic">

        <div class="grid">

            <div class="card">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/images/wbc.svg" alt="white blood cells image">
            <h2>White Blood Cells</h2>
            <p>White blood cells are part of the immune system and help the body fight off infections. In blood donations, they are typically reduced or removed because they can cause reactions in the person receiving the blood.<br> <a href="https://www.physio-pedia.com/Leukocytes">Source.</a> </p>
            </div>

            <div class="card">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/images/rbc.svg" alt="red blood cells image">
            <h2> Red Blood Cells</h2>
            <p>Red blood cells carry oxygen throughout the body. In blood donations, they are often separated from other components to be given to patients with anemia or those who have lost a lot of blood. <br><a href="https://www.hematology.org/education/patients/blood-basics#:~:text=Red%20blood%20cells%20are%20used,cells%20are%20used%20for%20transfusion."> Source.</a></p>

            </div>

            <div class="card">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/images/Plasma.svg" alt="blood plasma image"> 
            <h2>Plasma</h2>
            <p>Plasma is the liquid portion of the blood, carrying cells, nutrients, hormones, and waste products. In blood donations, plasma can be separated and used to treat patients with burns, shock, or bleeding disorders. <br> <a href="https://www.redcrossblood.org/donate-blood/dlp/plasma-information.html#:~:text=What%20is%20blood%20plasma%20used,and%20helps%20with%20blood%20clotting.">Source.</a></p>


            </div>

            <div class="card">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/images/Platelets.png" alt="blood platelets image"> 
            <h2> Blood Platelets</h2>
            <p>Platelets are crucial for blood clotting, which prevents excessive bleeding when we get injured. In blood donations, they can be collected separately and given to patients who have low platelet counts, such as those undergoing chemotherapy. <br> <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/platelet-donation.html#:~:text=Without%20a%20platelet%20transfusion%20cancer,replace%20those%20lost%20during%20bleeding.">Source. </a></p>

            </div>

    
        </div>

    </div>


<div class="bars">
    <hr class="rounded">
</div>




    





<style>

    * {
        margin: 0;
        padding: 0;

    }
    .happy {
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
    }

    .happy img {
        border-radius: .7rem;
        width: 65vw;
        margin-bottom: 6px;
    }

    .happy h1 {
        
        font-size: 2.5vw;
        font-weight: bolder;
        margin-bottom: 8px;
    }

    .happy p {
        text-align: center;
        width: 60vw;
    }


    .happy a {
        font-weight: bolder;
        text-decoration: underline;
    }
    
    .happy h2{ 
        margin-top: 10px;
        font-size: min(max-width);
    }

  
    .infographic {
        display: flex;
        justify-content: center;
    
    }
   
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 3rem;
        padding: 4rem;
        width: 65vw;
        margin: auto;
    }

    .card {
        border-radius: 1vw;
        padding: 1vw 1vh;
        text-align: center;
        background-color: white;
        
    }

   

    .card h2 {
        font-size: 1rem;

    }

    .card p {
        font-size: 15px;
    }
    .card a {
        font-weight: bold;
        text-decoration: underline;
    }



    @media (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr;
    }
    }
    
    .rounded {
      border-top: 1px solid grey;
      border-radius: 5px;
      width: 100vw;
      border-color: grey;
      opacity: 0.2;
      margin-bottom: 10px;
    }
  
 
    

    
    
    </style>