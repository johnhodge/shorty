var app = new Vue({
  el: '#app',
  data: {
    url: '',
    slug: '',
    host: document.location.href,
    created: null,
    message: '',
    error: '',
  },
  methods: {
    async createUrl() {
      const response = await fetch('/url', {
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
        })
      });
      this.created = await response.json();
      this.link = `${this.host}${this.slug}`
    }
  }
})