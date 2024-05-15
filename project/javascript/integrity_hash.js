document.addEventListener("DOMContentLoaded", function() {
    function calculateHashIntegrity() {
      const message = document.getElementById("integrityMessage").value;
      const secret = document.getElementById("integritySecret").value;
  
      // Calculate hash of entered message
      if (message.trim() === '') {
        document.getElementById("integrityMessageHash").value = '';
      } else {
        sha256(message).then(messageHash => {
          document.getElementById("integrityMessageHash").value = messageHash;
  
          // Concatenate message and secret, then calculate hash
          const concatenatedText = message + secret;
          return sha256(concatenatedText);
        }).then(concatenatedHash => {
          document.getElementById("integrityConcatenatedHash").value = concatenatedHash;
  
          // Calculate hash of concatenated text and secret, then combine with secret
          const hashSecret = concatenatedHash + secret;
          document.getElementById("hashSecretBox").value = hashSecret;
        }).catch(error => {
          console.error('Error calculating hash:', error);
        });
      }
  
      // Calculate hash of entered secret
      if (secret.trim() === '') {
        document.getElementById("integrityConcatenatedHash").value = '';
        document.getElementById("hashSecretBox").value = '';
      }
    }
  
    // Call calculateHashIntegrity function whenever message or secret changes
    document.getElementById("integrityMessage").addEventListener("input", calculateHashIntegrity);
    document.getElementById("integritySecret").addEventListener("input", calculateHashIntegrity);
  
    // Initial hash calculation
    calculateHashIntegrity();
  
    // Native JavaScript SHA-256 hashing function
    function sha256(message) {
      const buffer = new TextEncoder("utf-8").encode(message);
      return crypto.subtle.digest("SHA-256", buffer).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
        return hashHex;
      });
    }
  });
  
  // Clear hash values on refresh
  window.addEventListener("load", function() {
    document.getElementById("integrityMessageHash").value = '';
    document.getElementById("integrityConcatenatedHash").value = '';
    document.getElementById("hashSecretBox").value = '';
  });
  