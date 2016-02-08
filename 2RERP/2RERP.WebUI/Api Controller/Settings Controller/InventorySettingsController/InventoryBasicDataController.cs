using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using Newtonsoft.Json.Linq;
using _2RERP.Domain.Common;
using _2RERP.Domain.Inventory;
//using _2RERP.Domain.Inventory;
using _2RERP.RepositoryInterfaces.ComonRepository;
using _2RERP.RepositoryInterfaces.Inventory;
using _2RERP.RepositoryInterfaces.InventoryRepository;

namespace _2RERP.WebUI.Controllers
{
    public class InventoryBasicDataController : ApiController
    {
       
       
       
        private readonly IStoreTypes _storeTypes;

        public InventoryBasicDataController(IStoreTypes storeTypes) //, ICompoundUnits compoundUnits 
        {
          
            _storeTypes = storeTypes;
        }

        //

        // Get All StoreType by Get Method

        [System.Web.Http.HttpGet]
        [System.Web.Http.AllowAnonymous]
        [System.Web.Http.ActionName("StoreType")]
        public JArray GetStoreType()
        {
            try
            {
                IList<StoreTypes> objStoreTypes = new List<StoreTypes>();
                objStoreTypes = _storeTypes.GetAllData();
                return JArray.Parse(objStoreTypes.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }

        //

        // Insert New StoreType By Post Method

        [System.Web.Http.HttpPost]
        [System.Web.Http.AllowAnonymous]
        [System.Web.Http.ActionName("StoreType")]
        public JArray PostStoreType(StoreTypes obj)    //insert data to the user table
        {
            try
            {
                int storetypeid = _storeTypes.NextSequenceId(obj);
                obj.store_type_id = storetypeid;
                obj.audit_ts = DateTime.Now;
                _storeTypes.Create(obj);
                return GetStoreType();
                //ObjectId i;
                //i = 
                //    _storeTypes.Create(obj);
                //IList<StoreTypes> objStoreTypes = new List<StoreTypes>();
                //objStoreTypes = _storeTypes.GetAllData();
                //return JArray.Parse(objStoreTypes.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        //

        // Update StoreType Objects.....

        [System.Web.Http.HttpPut]
        [System.Web.Http.AllowAnonymous]
        [System.Web.Http.ActionName("StoreType")]
        public JArray PutStoreType(StoreTypes obj) //for Update
        {
            try
            {
                _storeTypes.Update(obj);
                return GetStoreType();
                //IList<StoreTypes> objStoreTypes = new List<StoreTypes>();
                //objStoreTypes = _storeTypes.GetAllData();
                //return JArray.Parse(objStoreTypes.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }

        //

        

    //    // Get All CompoundUnit by Get Method

    //    [System.Web.Http.HttpGet]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("CompoundUnit")]
    //    public JArray GetCompoundUnit()
    //    {
    //        try
    //        {
    //            IList<CompoundUnits> objCompoundUnits = new List<CompoundUnits>();
    //            objCompoundUnits = _compoundUnits.GetAllData();
    //            return JArray.Parse(objCompoundUnits.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }

    //    }

    //    //

    //    // Insert New CompoundUnit by Post Method

    //    [System.Web.Http.HttpPost]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("CompoundUnit")]
    //    public JArray PostCompoundUnit(CompoundUnits obj)    //insert data to the user table
    //    {
    //        try
    //        {
    //            _units.AddCompoundUnits(obj);//.AddCompoundUnit(obj);
    //            return GetCompoundUnit();
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }
    //    }

    //    //

    //    // Update CompoundUnit Objects.....

    //    [System.Web.Http.HttpPut]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("CompoundUnit")]
    //    public JArray PutCompoundUnit(CompoundUnits obj) //for Update
    //    {
    //        try
    //        {
    //            _units.UpdateCompoundUnits(obj); //.UpdateCompoundUnit(obj);
    //            return GetCompoundUnit();
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }
    //    }

    //    // Get All Unit by Get Method

    //    [System.Web.Http.HttpGet]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("Unit")]
    //    public JArray GetUnit()
    //    {
    //        try
    //        {
    //            IList<Units> objUnits = new List<Units>();
    //            objUnits = _units.GetAllData();
    //            return JArray.Parse(objUnits.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }

    //    }

    //    //

    //    // Insert New Unit by Post Method

    //    [System.Web.Http.HttpPost]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("Unit")]
    //    public JArray PostUnit(Units obj)    //insert data to the user table
    //    {
    //        try
    //        {
    //            int unitid = _units.NextSequenceId(obj);
    //            obj.unit_id = unitid;
    //            obj.audit_ts = DateTime.Now;
    //            _units.Create(obj);
    //            return GetUnit();
    //            //ObjectId i;
    //            //i = _units.Create(obj);
    //            //IList<Units> objUnits = new List<Units>();
    //            //objUnits = _units.GetAllData();
    //            //return JArray.Parse(objUnits.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }
    //    }

    //    //

    //    // Update Unit Objects.....

    //    [System.Web.Http.HttpPut]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("Unit")]
    //    public JArray PutUnit(Units obj) //for Update
    //    {
    //        try
    //        {
    //            _units.Update(obj);
    //            return GetUnit();
    //            //IList<Units> objUnits = new List<Units>();
    //            //objUnits = _units.GetAllData();
    //            //return JArray.Parse(objUnits.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }
    //    }

    //    //

    //    // Get All Brand by Get Method

    //    [System.Web.Http.HttpGet]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("Brand")]
    //    public JArray GetBrand()
    //    {
    //        try
    //        {
    //            IList<Brands> objBrands = new List<Brands>();
    //            objBrands = _brands.GetAllData();
    //            return JArray.Parse(objBrands.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }

    //    }

    //    //

    //    // Insert New Brand by Post Method

    //    [System.Web.Http.HttpPost]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("Brand")]
    //    public JArray PostBrand(Brands objBrand)    //insert data to the user table
    //    {
    //        try
    //        {
    //            int roleid = _brands.NextSequenceId(objBrand);
    //            objBrand.brand_id = roleid;
    //            objBrand.audit_ts = DateTime.Now;
    //            _brands.Create(objBrand);
    //            return GetBrand();
    //            //ObjectId i;
    //            //i = 
    //            //_brands.Create(objBrand);
    //            //IList<Brands> objrBrandses = new List<Brands>();
    //            //objrBrandses = _brands.GetAllData();
    //            //return JArray.Parse(objrBrandses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }

    //    }

    //    //

    //    // Update Brands Objects.....

    //    [System.Web.Http.HttpPut]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("Brand")]
    //    public JArray PutBrand(Brands obj)
    //    {
    //        try
    //        {
    //            _brands.Update(obj);
    //            return GetBrand();
    //            //IList<Brands> objBrands = new List<Brands>();
    //            //objBrands = _brands.GetAllData();
    //            //return JArray.Parse(objBrands.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }

    //    }

    //    //

    //    // Get All ItemType by Get Method

    //    [System.Web.Http.HttpGet]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("ItemType")]
    //    public JArray GetItemType()
    //    {
    //        try
    //        {
    //            IList<ItemTypes> objItemType = new List<ItemTypes>();
    //            objItemType = _itemTypes.GetAllData();
    //            return JArray.Parse(objItemType.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }
    //    }

    //    //

    //    // Insert New ItemType by Post Method

    //    [System.Web.Http.HttpPost]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("ItemType")]
    //    public JArray PostItemType(ItemTypes objItemType)    //insert data to the user table
    //    {
    //        try
    //        {
    //            int itemtypeid = _itemTypes.NextSequenceId(objItemType);
    //            objItemType.item_type_id = itemtypeid;
    //            objItemType.audit_ts = DateTime.Now;
    //            _itemTypes.Create(objItemType);
    //            return GetItemType();
    //            //ObjectId i;
    //            //i = 
    //            //_itemTypes.Create(objItemType);
    //            //IList<ItemTypes> objItemTypes = new List<ItemTypes>();
    //            //objItemTypes = _itemTypes.GetAllData();
    //            //return JArray.Parse(objItemTypes.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }

    //    }

    //    //

    //    // Update ItemTypes Objects.....

    //    [System.Web.Http.HttpPut]
    //    [System.Web.Http.AllowAnonymous]
    //    [System.Web.Http.ActionName("ItemType")]
    //    public JArray PutItemType(ItemTypes obj)
    //    {
    //        try
    //        {
    //            _itemTypes.Update(obj);
    //            return GetItemType();
    //            //IList<ItemTypes> objItemTypes = new List<ItemTypes>();
    //            //objItemTypes = _itemTypes.GetAllData();
    //            //return JArray.Parse(objItemTypes.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
    //        }
    //        catch (Exception)
    //        {
    //            throw;
    //        }
    //    }

    //    //
        

    }
}