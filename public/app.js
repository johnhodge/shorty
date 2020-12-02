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
          not_found: this.not_found
        })
      });
      this.created = await response.json();
      this.link = `${this.host}${this.created.slug}`
    }
  }
})