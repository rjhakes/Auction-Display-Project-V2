using MVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using BL;
using Models;

namespace MVC.Controllers
{
    public class BuyerController : Controller
    {
        private readonly ILogger<BuyerController> _logger;
        private readonly IMapper _mapper;
        private readonly IBuyerBL _buyerBL;

        public BuyerController(ILogger<BuyerController> logger, IMapper mapper, IBuyerBL buyerBL)
        {
            _buyerBL = buyerBL;
            _mapper = mapper;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View(
                _buyerBL
                .GetBuyers()
                .Select(x => _mapper.cast2BuyerIndexVM(x))
                .ToList()
                );
        }

        public ActionResult Details()
        {
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(BuyerCRVM newBuyer)
        {
            return View();
        }

        public ActionResult Edit()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(BuyerEditVM buyer2BUpdated)
        {
            return View();
        }

        public ActionResult Delete()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
