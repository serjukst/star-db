class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could ot fetch ${url} , received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p) => {
    console.log(p.name)
  })
})

swapi.getPerson(3).then((person) => {
  console.log(`Get person:`, person.name)
})