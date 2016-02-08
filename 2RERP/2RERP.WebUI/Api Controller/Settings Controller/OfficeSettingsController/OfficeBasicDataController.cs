using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Http;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using Newtonsoft.Json.Linq;
using _2RERP.Domain.Common;
using _2RERP.Domain.Office;
using _2RERP.RepositoryInterfaces.ComonRepository;
using _2RERP.RepositoryInterfaces.OfficeRepository;

namespace _2RERP.WebUI.Controllers
{
    public class OfficeBasicDataController : ApiController
    {
        private readonly IOffices _offices;
        //private readonly ITaxMaster _taxMaster;
        private readonly ITaxBaseAmountTypes _taxBaseAmountTypes;
        //private readonly ICurrency _currency;
        //private readonly IStates _states;
        //private readonly IRoles _roles;
        //private readonly IDepartments _departments;
        //private readonly IGender _gender;
        //private readonly INationality _nationality;
        //private readonly IIdentificationtypes _identificationtypes;
        //private readonly IMaritalstatuses _maritalstatuses;
        //private readonly IEntities _entities;

        public OfficeBasicDataController(IOffices offices, ITaxBaseAmountTypes taxBaseAmountTypes)//, ITaxMaster taxMaster, ICurrency currency)//, IStates states, IRoles roles, IDepartments departments, IGender gender, INationality nationality, ICurrency currency, IIdentificationtypes identificationtypes, IMaritalstatuses maritalstatuses, IEntities entities)
        {
            _offices = offices;
            //_taxMaster = taxMaster;
            _taxBaseAmountTypes = taxBaseAmountTypes;
            //_countries = countries;
            //_states = states;
            //_roles = roles;
            //_departments = departments;
            //_gender = gender;
            //_nationality = nationality;
            //_currency = currency;
            //_identificationtypes = identificationtypes;
            //_maritalstatuses = maritalstatuses;
            //_entities = entities;
        }

        [HttpGet]
        [AllowAnonymous]
        [ActionName("Offices")]
        public JArray GetOffice()
        {
            try
            {
                IList<Offices> objOfficeses = new List<Offices>();
                objOfficeses = _offices.GetAllData();
                return JArray.Parse(objOfficeses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("Offices")]
        public JArray PostOffice(Offices obj)    //insert data to the user table
        {
            try
            {
                int ofiicedid = _offices.NextSequenceId(obj);
                obj.office_id = ofiicedid;
                obj.audit_ts = DateTime.Now;
                _offices.Create(obj);
                return GetOffice();
            }
            catch (Exception)
            {

                throw;
            }


        }

        [HttpPut]
        [AllowAnonymous]
        [ActionName("Offices")]
        public JArray Put(Offices obj)
        {
            try
            {
                _offices.Update(obj);
                return GetOffice();
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        //

        // Get All TaxMaster by Get Method

        //[HttpGet]
        //[AllowAnonymous]
        //[ActionName("TaxMaster")]
        //public JArray GetTaxMaster()
        //{
        //    try
        //    {
        //        IList<TaxMaster> objTaxMasters = new List<TaxMaster>();
        //        objTaxMasters = _taxMaster.GetAllData();
        //        return JArray.Parse(objTaxMasters.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        //

        // Insert New TaxMaster by Post Method

        //[HttpPost]
        //[AllowAnonymous]
        //[ActionName("TaxMaster")]
        //public JArray PostTaxMaster(TaxMaster objTxMaster)    //insert data to the user table
        //{
        //    try
        //    {
        //        int taxmasterid = _taxMaster.NextSequenceId(objTxMaster);
        //        objTxMaster.tax_master_id = taxmasterid;
        //        objTxMaster.audit_ts = DateTime.Now;
        //        _taxMaster.Create(objTxMaster);
        //        return GetTaxMaster();
        //        //IList<Departments> objDepartmentses = new List<Departments>();
        //        //objDepartmentses = _departments.GetAllData();
        //        //return JArray.Parse(objDepartmentses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        //

        // Update TaxMaster Objects.....

        //[HttpPut]
        //[AllowAnonymous]
        //[ActionName("TaxMaster")]
        //public JArray PutTaxMaster(TaxMaster obj)
        //{
        //    try
        //    {
        //        _taxMaster.Update(obj);
        //        return GetTaxMaster();
        //        //IList<Departments> objDepartmentses = new List<Departments>();
        //        //objDepartmentses = _departments.GetAllData();
        //        //return JArray.Parse(objDepartmentses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        //

        // Get All State by Get Method

        //[HttpGet]
        //[AllowAnonymous]
        //[ActionName("State")]
        //public JArray GetState()
        //{
        //    try
        //    {
        //        IList<States> objStates = new List<States>();
        //        objStates = _states.GetAllData();
        //        return JArray.Parse(objStates.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Insert New State by Post Method

        //[HttpPost]
        //[AllowAnonymous]
        //[ActionName("State")]
        //public JArray PostState(States obj)    //insert data to the user table
        //{
        //    try
        //    {
        //        _countries.AddState(obj);
        //        return GetState();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Update State Objects.....

        //[HttpPut]
        //[AllowAnonymous]
        //[ActionName("State")]
        //public JArray PutState(States obj) //for Update
        //{
        //    try
        //    {
        //        _countries.UpdateState(obj);
        //        return GetState();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        //// Get All Roll by Get Method

        //[HttpGet]
        //[AllowAnonymous]
        //[ActionName("Role")]
        //public JArray GetRole()
        //{
        //    try
        //    {
        //        IList<Roles> objRoles = new List<Roles>();
        //        objRoles = _roles.GetAllData();
        //        return JArray.Parse(objRoles.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Insert New Role by Post Method

        //[HttpPost]
        //[AllowAnonymous]
        //[ActionName("Role")]
        //public JArray PostRole(Roles objRole)    //insert data to the user table
        //{
        //    try
        //    {
        //        int roleid = _roles.NextSequenceId(objRole);
        //        objRole.role_id = roleid;
        //        objRole.audit_ts = DateTime.Now;
        //        _roles.Create(objRole);
        //        return GetRole();
        //        //IList<Roles> objrRoleses = new List<Roles>();
        //        //objrRoleses = _roles.GetAllData();
        //        //return JArray.Parse(objrRoleses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Update Roles Objects.....

        //[HttpPut]
        //[AllowAnonymous]
        //[ActionName("Role")]
        //public JArray PutRole(Roles obj)
        //{
        //    try
        //    {
        //        _roles.Update(obj);
        //        return GetRole();
        //        //IList<Roles> objRoles = new List<Roles>();
        //        //objRoles = _roles.GetAllData();
        //        //return JArray.Parse(objRoles.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Get All Department by Get Method

        //[HttpGet]
        //[AllowAnonymous]
        //[ActionName("Department")]
        //public JArray GetDepartment()
        //{
        //    try
        //    {
        //        IList<Departments> objDepartment = new List<Departments>();
        //        objDepartment = _departments.GetAllData();
        //        return JArray.Parse(objDepartment.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Insert New Department by Post Method

        //[HttpPost]
        //[AllowAnonymous]
        //[ActionName("Department")]
        //public JArray PostDepartment(Departments objDept)    //insert data to the user table
        //{
        //    try
        //    {
        //        int departmentid = _departments.NextSequenceId(objDept);
        //        objDept.department_id = departmentid;
        //        objDept.audit_ts = DateTime.Now;
        //        _departments.Create(objDept);
        //        return GetDepartment();
        //        //IList<Departments> objDepartmentses = new List<Departments>();
        //        //objDepartmentses = _departments.GetAllData();
        //        //return JArray.Parse(objDepartmentses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Update Departments Objects.....

        //[HttpPut]
        //[AllowAnonymous]
        //[ActionName("Department")]
        //public JArray PutDepartment(Departments obj)
        //{
        //    try
        //    {
        //        _departments.Update(obj);
        //        return GetDepartment();
        //        //IList<Departments> objDepartmentses = new List<Departments>();
        //        //objDepartmentses = _departments.GetAllData();
        //        //return JArray.Parse(objDepartmentses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Get All Gender by Get Method

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Gender")]
        //public JArray GetGender()
        //{
        //    try
        //    {
        //        IList<Gender> objGender = new List<Gender>();
        //        objGender = _gender.GetAllData();
        //        return JArray.Parse(objGender.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Insert New Genders by Post Method

        //[System.Web.Http.HttpPost]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Gender")]
        //public JArray PostGender(Gender objGender)    //insert data to the user table
        //{
        //    try
        //    {
        //        objGender.audit_ts = DateTime.Now;
        //        _gender.Create(objGender);
        //        return GetGender();
        //        //IList<Gender> objGenders = new List<Gender>();
        //        //objGenders = _gender.GetAllData();
        //        //return JArray.Parse(objGenders.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Update Genders Objects.....

        //[System.Web.Http.HttpPut]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Gender")]
        //public JArray PutGender(Gender objGender)
        //{
        //    try
        //    {
        //        _gender.Update(objGender);
        //        return GetGender();
        //        //IList<Gender> objGenders = new List<Gender>();
        //        //objGenders = _gender.GetAllData();
        //        //return JArray.Parse(objGenders.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Get All Nationality by Get Method

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Nationality")]
        //public JArray GetNationality()
        //{
        //    try
        //    {
        //        IList<Nationality> objNationality = new List<Nationality>();
        //        objNationality = _nationality.GetAllData();
        //        return JArray.Parse(objNationality.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Insert New Nationality by Post Method

        //[System.Web.Http.HttpPost]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Nationality")]
        //public JArray PostNationality(Nationality objNationality)    //insert data to the user table
        //{
        //    try
        //    {
        //        objNationality.audit_ts = DateTime.Now;
        //        //ObjectId i;
        //        _nationality.Create(objNationality);
        //        return GetNationality();
        //        //IList<Nationality> objNationalities = new List<Nationality>();
        //        //objNationalities = _nationality.GetAllData();
        //        //return JArray.Parse(objNationalities.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Update Nationalities Objects.....

        //[System.Web.Http.HttpPut]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Nationality")]
        //public JArray PutNationality(Nationality obj)
        //{
        //    try
        //    {
        //        _nationality.Update(obj);
        //        return GetNationality();
        //        //IList<Nationality> objNationalities = new List<Nationality>();
        //        //objNationalities = _nationality.GetAllData();
        //        //return JArray.Parse(objNationalities.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        // Get All TaxBaseAmmountTypes by Get Method

        [System.Web.Http.HttpGet]
        [System.Web.Http.AllowAnonymous]
        [System.Web.Http.ActionName("TaxBaseAmmountTypes")]
        public JArray GetTaxBaseAmmountTypes()
        {
            try
            {
                IList<TaxBaseAmountTypes> objTaxBaseAmmountTypes = new List<TaxBaseAmountTypes>();
                objTaxBaseAmmountTypes = _taxBaseAmountTypes.GetAllData();
                return JArray.Parse(objTaxBaseAmmountTypes.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }

        //

        // Insert New TaxBaseAmmountTypes by Post Method

        [System.Web.Http.HttpPost]
        [System.Web.Http.AllowAnonymous]
        [System.Web.Http.ActionName("TaxBaseAmmountTypes")]
        public JArray PostTaxBaseAmmountTypes(TaxBaseAmountTypes objTaxBaseAmmountTypes)    //insert data to the user table
        {
            try
            {
                //objTaxBaseAmmountTypes.audit_ts = DateTime.Now;
                //ObjectId i;
                _taxBaseAmountTypes.Create(objTaxBaseAmmountTypes);
                return GetTaxBaseAmmountTypes();
                //IList<Currencies> objCurrencieses = new List<Currencies>();
                //objCurrencieses = _currency.GetAllData();
                //return JArray.Parse(objCurrencieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }

        //

        // Update TaxBaseAmmountTypes Objects.....

        [System.Web.Http.HttpPut]
        [System.Web.Http.AllowAnonymous]
        [System.Web.Http.ActionName("TaxBaseAmmountTypes")]
        public JArray PutTaxBaseAmmountTypes(TaxBaseAmountTypes objTaxBaseAmmountTypes)
        {
            try
            {
                _taxBaseAmountTypes.Update(objTaxBaseAmmountTypes);
                return GetTaxBaseAmmountTypes();
                //IList<Currencies> objCurrencieses = new List<Currencies>();
                //objCurrencieses = _currency.GetAllData();
                //return JArray.Parse(objCurrencieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }

        //

        //// Get All Identification Type by Get Method
        ////

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Identificationtypes")]
        //public JArray GetIdentificationtypes()
        //{
        //    try
        //    {
        //        IList<Identification_types> objIdentificationtypess = new List<Identification_types>();
        //        objIdentificationtypess = _identificationtypes.GetAllData();
        //        return JArray.Parse(objIdentificationtypess.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        //// Insert New Identification Type by Post Method

        //[System.Web.Http.HttpPost]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Identificationtypes")]
        //public JArray PostIdentificationtypes(Identification_types objIdentificationtypes)    //insert data to the user table
        //{
        //    try
        //    {
        //        objIdentificationtypes.audit_ts = DateTime.Now;
        //        //ObjectId i;
        //        _identificationtypes.Create(objIdentificationtypes);
        //        return GetIdentificationtypes();
        //        //IList<Identification_types> objIdentificationtypess = new List<Identification_types>();
        //        //objIdentificationtypess = _identificationtypes.GetAllData();
        //        //return JArray.Parse(objIdentificationtypess.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Update Identification Type Objects.....

        //[System.Web.Http.HttpPut]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Identificationtypes")]
        //public JArray PutIdentificationtypes(Identification_types objIdentificationtypes)
        //{
        //    try
        //    {
        //        _identificationtypes.Update(objIdentificationtypes);
        //        return GetIdentificationtypes();
        //        //IList<Identification_types> objIdentificationtypess = new List<Identification_types>();
        //        //objIdentificationtypess = _identificationtypes.GetAllData();
        //        //return JArray.Parse(objIdentificationtypess.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Get All MaritalStatus by Get Method

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("MaritalStatus")]
        //public JArray GetMaritalStatus()
        //{
        //    try
        //    {
        //        IList<marital_statuses> objMaritalStatus = new List<marital_statuses>();
        //        objMaritalStatus = _maritalstatuses.GetAllData();
        //        return JArray.Parse(objMaritalStatus.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Insert New MaritalStatus by Post Method

        //[System.Web.Http.HttpPost]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("MaritalStatus")]
        //public JArray PostMaritalStatus(marital_statuses objMaritalStatus)    //insert data to the user table
        //{
        //    try
        //    {
        //        int maritalstatusid = _maritalstatuses.NextSequenceId(objMaritalStatus);
        //        objMaritalStatus.marital_status_id = maritalstatusid;
        //        objMaritalStatus.audit_ts = DateTime.Now;
        //        _maritalstatuses.Create(objMaritalStatus);
        //        return GetMaritalStatus();
        //        //IList<marital_statuses> objMaritalStatuseses = new List<marital_statuses>();
        //        //objMaritalStatuseses = _maritalstatuses.GetAllData();
        //        //return JArray.Parse(objMaritalStatuseses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Update MaritalStatus Objects.....

        //[System.Web.Http.HttpPut]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("MaritalStatus")]
        //public JArray PutRole(marital_statuses objMaritalStatus)
        //{
        //    try
        //    {
        //        _maritalstatuses.Update(objMaritalStatus);
        //        return GetMaritalStatus();
        //        //IList<marital_statuses> objMaritalStatuseses = new List<marital_statuses>();
        //        //objMaritalStatuseses = _maritalstatuses.GetAllData();
        //        //return JArray.Parse(objMaritalStatuseses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }

        //}

        ////

        //// Get All Entities by Get Method

        //[System.Web.Http.HttpGet]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Entity")]
        //public JArray GetEntity()
        //{
        //    try
        //    {
        //        IList<Entities> objEntitieses = new List<Entities>();
        //        objEntitieses = _entities.GetAllData();
        //        return JArray.Parse(objEntitieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Insert New Entities by Post Method

        //[System.Web.Http.HttpPost]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Entity")]
        //public JArray PostEntity(Entities objEntity)    //insert data to the user table
        //{
        //    try
        //    {
        //        int entitiesid = _entities.NextSequenceId(objEntity);
        //        objEntity.entity_id = entitiesid;
        //        objEntity.audit_ts = DateTime.Now;
        //        _entities.Create(objEntity);
        //        return GetEntity();
        //        //IList<Gender> objGenders = new List<Gender>();
        //        //objGenders = _gender.GetAllData();
        //        //return JArray.Parse(objGenders.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        ////

        //// Update Entities Objects.....

        //[System.Web.Http.HttpPut]
        //[System.Web.Http.AllowAnonymous]
        //[System.Web.Http.ActionName("Entity")]
        //public JArray PutEntity(Entities objEntity)
        //{
        //    try
        //    {
        //        _entities.Update(objEntity);
        //        return GetEntity();
        //        //IList<Gender> objGenders = new List<Gender>();
        //        //objGenders = _gender.GetAllData();
        //        //return JArray.Parse(objGenders.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}

        //
    }
}



//[HttpPost]
//[AllowAnonymous]
//[ActionName("State")]
//public JArray PostState(States obj)    //insert data to the user table
//{
//    try
//    {
//        int stateid = _states.NextSequenceId(obj);
//        obj.state_id = stateid;
//        obj.audit_ts = DateTime.Now;
//        ObjectId i;
//        i = _states.Create(obj);
//        IList<States> objStates = new List<States>();
//        objStates = _states.GetAllData();
//        return JArray.Parse(objStates.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
//    }
//    catch (Exception)
//    {
//        throw;
//    }
//}