using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComicWebAPI.Models
{
    // Represent Comic Details
    public class Comic
    {
        // Comic ID
        public int Id { get; set; }

        // Comic Name
        public string ComicName { get; set; }

        // Comic Price
        public int Price { get; set; }

        // Pages of Comic
        public int Pages { get; set; }

    }
}
