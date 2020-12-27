var app = new Vue({
  el: '#app',
  data: {
    url: '',
    slug: '',
    host: document.location.href.split('?')[0],
    created: null,
    message: '',
    error: '',
    not_found: decodeURI(document.location.href.split('=')[1])
  },
  methods: {
    async createUrl() {
      const response = await fetch('/api/v1/url', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          url: this.url,
          slug: this.slug,
          host: this.host,
          message: this.message,
          error: this.error.message,
          not_found: this.not_found
        })
      });
      this.created = await response.json();
      this.link = `${this.host}${this.created.slug}`;
    },
      copyShorty () {
        let shortyMessage = document.querySelector(".link-message");
        console.log(shortyMessage);
        let shortyToCopy = document.querySelector('#copied-shorty');
        shortyToCopy.setAttribute('type', 'text');
        shortyToCopy.select();

        try {
          var successful = document.execCommand('copy');
          // var msg = successful ? 'successful' : 'unsuccessful';
          shortyMessage.append(" 🎉 🎉")
          // alert('Testing code was copied ' + msg);
        } catch (err) {
          shortyMessage.append(" 🛑 🛑");
        }

        /* unselect the range */
        shortyToCopy.setAttribute('type', 'hidden');
        window.getSelection().removeAllRanges();
      },
  }
})