﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApiYouLab.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class YouLabEntities : DbContext
    {
        public YouLabEntities()
            : base("name=YouLabEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Categorie> Categorie { get; set; }
        public virtual DbSet<Consultation> Consultation { get; set; }
        public virtual DbSet<Examen> Examen { get; set; }
        public virtual DbSet<Laborantin> Laborantin { get; set; }
        public virtual DbSet<Medecin> Medecin { get; set; }
        public virtual DbSet<Patient> Patient { get; set; }
        public virtual DbSet<Resultat> Resultat { get; set; }
        public virtual DbSet<Secretaire> Secretaire { get; set; }
        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
    }
}