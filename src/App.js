import React, { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div style={styles.page}>
        <div style={{ position: 'relative', width: '350px' }}>
          {/* البوكس نفسه */}
          <div style={{ ...styles.container, position: 'relative', zIndex: 1 }}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form style={styles.form} onSubmit={e => e.preventDefault()}>
              {!isLogin && <input type="text" placeholder="Username" style={styles.input} required />}
              <input type="email" placeholder="Email" style={styles.input} required />
              <input type="password" placeholder="Password" style={styles.input} required />
              <button type="submit" style={styles.button}>{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <p style={styles.switch}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span style={styles.link} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? ' Sign Up' : ' Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: { 
    backgroundColor: '#f4f6f9', 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
    paddingTop: '100px', 
    paddingLeft: '100px' 
  },
  container: { 
    width: '100%', 
    padding: '30px', 
    backgroundColor: 'white', 
    borderRadius: '12px', 
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)', 
    textAlign: 'center', 
    fontFamily: 'Arial, sans-serif' 
  },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' },
  input: { padding: '12px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '6px' },
  button: { padding: '12px', backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  switch: { marginTop: '20px', fontSize: '14px' },
  link: { color: '#007BFF', cursor: 'pointer', marginLeft: '5px' }
};

export default App;
