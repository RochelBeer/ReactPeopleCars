using Microsoft.AspNetCore.DataProtection.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars59.Data;

namespace ReactPeopleCars59.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectonString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectonString = configuration.GetConnectionString("ConStr");
        }
        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            Repository repo = new(_connectonString);
            return repo.GetPeople();
        }
        [Route("getpersonbyid")]
        public Person GetPersonById(int id)
        {
            Repository repo = new(_connectonString);
            return repo.GetPersonById(id);
        }
        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            Repository repo = new(_connectonString);
            repo.AddPerson(person);
        }
        [Route("getcarsbypersonid")]
        public List<Car> GetCarsByPersonId(int id)
        {
            Repository repo = new(_connectonString);
            return repo.GetCars(id);
        }
        [Route("addcar")]
        [HttpPost]
        public void AddCar(Car car)
        {
            Repository repo = new(_connectonString);
            repo.AddCar(car);
        }
        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(int id)
        {
            Repository repo = new(_connectonString);
            repo.DeleteCars(id);
        }
    }
}
