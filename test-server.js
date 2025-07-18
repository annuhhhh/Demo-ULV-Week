const http = require('http');

// Test the server health endpoint
function testServer() {
  const options = {
    hostname: 'localhost',
    port: 5501,
    path: '/api/health',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log('✅ Server is running!');
        console.log('📊 Health check response:', response);
        
        if (response.openaiConfigured) {
          console.log('🔑 OpenAI API is configured');
        } else {
          console.log('⚠️  OpenAI API is not configured - add your API key to .env');
        }
      } catch (error) {
        console.log('❌ Invalid JSON response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.log('❌ Server test failed:', error.message);
    console.log('💡 Make sure the server is running with: npm run dev');
  });

  req.end();
}

// Test the main page
function testMainPage() {
  const options = {
    hostname: 'localhost',
    port: 5501,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('✅ Main page is accessible');
    } else {
      console.log(`❌ Main page returned status: ${res.statusCode}`);
    }
  });

  req.on('error', (error) => {
    console.log('❌ Main page test failed:', error.message);
  });

  req.end();
}

console.log('🧪 Testing FitPlan Pro Server...');
console.log('================================');

// Wait a moment for server to start if needed
setTimeout(() => {
  testServer();
  setTimeout(testMainPage, 1000);
}, 1000); 