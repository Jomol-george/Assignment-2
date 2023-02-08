/* Author:JOMOL GEORGE
Date:02-02-2023 */

* {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-family: "Roboto", sans-serif;
    font-family: "Roboto Slab", serif;
}

.container {
    padding: 0;
    margin: 0;
    width: 100%;
}
.banner {
    display: flex;
    background-image: url(../images/academy-banner.jpg);
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    padding: 10%;
    width: 100%;
}

.banner_text {
    margin-top: 2%;
    width: 50%;
    font-size: 25px;
    color: #1e2531;
}
/* banner div closed */
.second_div {
    width: 80%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.first_img img {
    size: 70%;
}
span {
    color: #ff0000;
}
.description {
    background-color: #1e2531;
    position: absolute;
    color: darkturquoise;
    width: fit-content;
    padding: 2%;
    top: 15%;
    right: 0;
}
.description h2 {
    padding: 10px;
}
.course_desp {
    text-align: center;
    color: #252525;
    padding-left: 10%;
    padding-right: 10%;
    padding: 5%;
    font-size: 20px;
}
/* second div closed */
.third_div {
    background-image: url(../images/modulebg.jpg);
    height: 100vh;
}
.contents {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20%;
    padding-bottom: 20%;
    gap: 30px;
}
.contents div {
    width: 20%;
    text-align: center;
    padding: 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
}
/* third_div closed */
.fourth_div {
    margin: 3% 0 3% 0;
    width: 100%;
}
.course_desp2 p {
    text-align: center;
    color: #252525;
    padding-left: 20%;
    padding-right: 20%;
    font-size: 20px;
}

.footer {
    width: 40%;
    margin: 5% auto 0 auto;
    text-align: center;
}
.middle {
    width: 100%;
    text-align: center;
}
.join {
    color: #ff0000;
    border: 2px solid #ff0000;
    width: 40%;
    /* height: 0%; */
    align-self: center;
    text-align: center;
    margin: 20px auto;
}
.join div {
    text-align: center;
}

.fourth {
    width: 100%;
    height: 100%;
}

.one {
    float: left;
    width: 50%;
    position: relative;
}

.two {
    float: right;
    width: 50%;
    position: relative;
}

.inner_bg {
    background-color: rgba(6, 8, 11, 0.7);
    width: 90%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.inner_bg p {
    color: #fff;
    text-align: center;
    font-size: larger;
    padding: 20%;
}
.clear {
    clear: both;
}
.contact {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    text-align: center;
    gap: 20%;
}
.office {
    width: 40%;
    padding: 2%;
}
.office div {
    margin-bottom: 10%;
    margin-top: 5%;
}
/* media query started here */
@media screen and (max-width: 576px) {
    .container {
        width: fit-content;
    }
    .banner {
        background-image: none;
        background-color: bisque;
        /* padding-right: 5%; */
        text-align: center;
        width: 100%;
    }
    .second_div {
        width: 100%;

        position: relative;
    }
    .description {
        position: static;
        width: 100%;
        margin: 0;
    }
}
