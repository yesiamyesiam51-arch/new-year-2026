body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  transition: background 1s ease;
}

/* Page Gradients */
body.page-0 { background: linear-gradient(to right, #ffb6c1, #ff69b4); } /* Pink Landing */
body.page-1 { background: linear-gradient(to right, #f5c7b8, #f78ca0); } /* Romantic Wish 1 */
body.page-2 { background: linear-gradient(to right, #d291bc, #f4a6c0); } /* Romantic Wish 2 */
body.page-3 { background: linear-gradient(to right, #a18cd1, #fbc2eb); } /* Romantic Wish 3 */
body.page-4 { background: linear-gradient(to right, #8a2be2, #4b0082); } /* Q1 */
body.page-5 { background: linear-gradient(to right, #ffa500, #ffd700); } /* Q2 */
body.page-6 { background: linear-gradient(to right, #00ced1, #20b2aa); } /* Q3 */
body.page-7 { background: linear-gradient(to right, #ff7f50, #ff6347); } /* Q4 */
body.page-8 { background: linear-gradient(to right, #f5af19, #f12711); } /* Q5 */
body.page-9 { background: linear-gradient(to right, #ff6a88, #ff99ac); } /* Q6 */
body.page-10 { background: linear-gradient(to right, #43cea2, #185a9d); } /* Q7 */
body.page-11 { background: linear-gradient(to right, #fbc2eb, #a6c1ee); } /* Q8 */

.hidden { display: none; }

.container {
  animation: float 2s infinite alternate;
  padding: 20px;
  max-width: 700px;
}

h1 {
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

p {
  font-family: 'Caveat', cursive;
  font-size: 1.4rem;
  line-height: 1.6;
}

button {
  padding: 12px 25px;
  font-size: 1.2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #fff;
  color: #ff69b4;
  font-weight: bold;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s, background 0.2s, color 0.2s;
}

button:hover {
  transform: scale(1.1);
  background: #ff69b4;
  color: #fff;
}

input {
  padding: 12px;
  font-size: 1rem;
  border-radius: 15px;
  border: none;
  width: 80%;
  margin: 10px 0;
  font-family: 'Caveat', cursive;
  text-align: center;
}

@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-15px); }
}

#answersList p {
  font-size: 1.2rem;
  margin: 10px 0;
  background: rgba(255,255,255,0.2);
  padding: 10px;
  border-radius: 10px;
  font-family: 'Caveat', cursive;
}

/* Confetti */
.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 1000;
}

/* Sparkle */
.sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.8;
  animation: sparkleAnim 1s linear infinite;
  pointer-events: none;
}

@keyframes sparkleAnim {
  0% { transform: scale(1) translateY(0) rotate(0deg); opacity:1; }
  100% { transform: scale(0) translateY(-50px) rotate(360deg); opacity:0; }
}
/* Floating Hearts */
.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ff6b81;
  transform: rotate(-45deg);
  animation: floatHeart 5s linear infinite;
  opacity: 0.8;
  z-index: 1000;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ff6b81;
  border-radius: 50%;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  top: 0;
  left: 10px;
}

@keyframes floatHeart {
  0% { transform: translateY(0) rotate(-45deg) scale(0.8); opacity: 0.8; }
  50% { transform: translateY(-200px) rotate(-45deg) scale(1); opacity: 1; }
  100% { transform: translateY(-400px) rotate(-45deg) scale(0.8); opacity: 0; }
}

