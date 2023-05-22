using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleCars59.Data
{

    public class Repository
    {
        private string _connectionSring;
        public Repository(string connectionString)
        {
            _connectionSring = connectionString;
        }
        public List<Person> GetPeople()
        {
            using var context = new PeopleCarsDbContext(_connectionSring);
            return context.People.Include(p => p.Cars).ToList();               
        }
        public Person GetPersonById(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionSring);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
        public void AddPerson(Person person)
        {
            using var context = new PeopleCarsDbContext(_connectionSring);
            context.People.Add(person);
            context.SaveChanges();
        }
        public List<Car> GetCars(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionSring);
            List<Car>Cars = context.Cars.Where(c => c.PersonId == id).ToList();
            return Cars;
        }
        public void AddCar(Car car)
        {
            using var context = new PeopleCarsDbContext(_connectionSring);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public void DeleteCars(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionSring);
            var carsToDelete = context.Cars.Where(c => c.PersonId == id).ToList();
            context.Cars.RemoveRange(carsToDelete);
            context.SaveChanges();
        }

    }

}
