-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nationalities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nationalities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marital_statuses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "marital_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employment_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employment_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employment_natures" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employment_natures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_grades" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_grades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_steps" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_class_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "position_class_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_class_categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "position_class_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salary_scales" (
    "id" SERIAL NOT NULL,
    "jobGradeId" INTEGER,
    "jobStepId" INTEGER,
    "salary" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "salary_scales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "locales" JSONB,
    "parentId" INTEGER,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_classes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "locales" JSONB,
    "genderId" INTEGER,
    "positionClassTypeId" INTEGER,
    "positionClassCategoryId" INTEGER,
    "salaryScaleId" INTEGER,
    "minimumAge" INTEGER NOT NULL DEFAULT 0,
    "maximumAge" INTEGER NOT NULL DEFAULT 0,
    "monthlyWorkingHours" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "salary" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "specification" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "position_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "positions" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR NOT NULL,
    "positionClassId" INTEGER,
    "departmentId" INTEGER,
    "vacant" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "firstName" JSONB NOT NULL,
    "lastName" JSONB NOT NULL,
    "grandfatherName" JSONB NOT NULL,
    "locales" JSONB,
    "genderId" INTEGER,
    "nationalityId" INTEGER,
    "maritalStatusId" INTEGER,
    "employmentTypeId" INTEGER,
    "employmentNatureId" INTEGER,
    "dateOfBirth" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "placeOfBirth" TEXT NOT NULL,
    "countryOfBirth" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "emergencyContact" TEXT NOT NULL,
    "emergencyPhone" TEXT NOT NULL,
    "numberOfChildren" INTEGER NOT NULL,
    "employmentDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "probationDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "retirementDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genders_name_key" ON "genders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "genders_code_key" ON "genders"("code");

-- CreateIndex
CREATE UNIQUE INDEX "nationalities_name_key" ON "nationalities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "nationalities_code_key" ON "nationalities"("code");

-- CreateIndex
CREATE UNIQUE INDEX "marital_statuses_name_key" ON "marital_statuses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "marital_statuses_code_key" ON "marital_statuses"("code");

-- CreateIndex
CREATE UNIQUE INDEX "employment_types_name_key" ON "employment_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employment_types_code_key" ON "employment_types"("code");

-- CreateIndex
CREATE UNIQUE INDEX "employment_natures_name_key" ON "employment_natures"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employment_natures_code_key" ON "employment_natures"("code");

-- CreateIndex
CREATE UNIQUE INDEX "job_grades_name_key" ON "job_grades"("name");

-- CreateIndex
CREATE UNIQUE INDEX "job_grades_code_key" ON "job_grades"("code");

-- CreateIndex
CREATE UNIQUE INDEX "job_steps_name_key" ON "job_steps"("name");

-- CreateIndex
CREATE UNIQUE INDEX "job_steps_code_key" ON "job_steps"("code");

-- CreateIndex
CREATE UNIQUE INDEX "position_class_types_name_key" ON "position_class_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "position_class_types_code_key" ON "position_class_types"("code");

-- CreateIndex
CREATE UNIQUE INDEX "position_class_categories_name_key" ON "position_class_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "position_class_categories_code_key" ON "position_class_categories"("code");

-- CreateIndex
CREATE UNIQUE INDEX "position_classes_name_key" ON "position_classes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "position_classes_code_key" ON "position_classes"("code");

-- CreateIndex
CREATE UNIQUE INDEX "positions_code_key" ON "positions"("code");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "salary_scales" ADD CONSTRAINT "salary_scales_jobGradeId_fkey" FOREIGN KEY ("jobGradeId") REFERENCES "job_grades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_scales" ADD CONSTRAINT "salary_scales_jobStepId_fkey" FOREIGN KEY ("jobStepId") REFERENCES "job_steps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_classes" ADD CONSTRAINT "position_classes_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_classes" ADD CONSTRAINT "position_classes_positionClassTypeId_fkey" FOREIGN KEY ("positionClassTypeId") REFERENCES "position_class_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_classes" ADD CONSTRAINT "position_classes_positionClassCategoryId_fkey" FOREIGN KEY ("positionClassCategoryId") REFERENCES "position_class_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_classes" ADD CONSTRAINT "position_classes_salaryScaleId_fkey" FOREIGN KEY ("salaryScaleId") REFERENCES "salary_scales"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_positionClassId_fkey" FOREIGN KEY ("positionClassId") REFERENCES "position_classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_nationalityId_fkey" FOREIGN KEY ("nationalityId") REFERENCES "nationalities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_maritalStatusId_fkey" FOREIGN KEY ("maritalStatusId") REFERENCES "marital_statuses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_employmentTypeId_fkey" FOREIGN KEY ("employmentTypeId") REFERENCES "employment_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_employmentNatureId_fkey" FOREIGN KEY ("employmentNatureId") REFERENCES "employment_natures"("id") ON DELETE SET NULL ON UPDATE CASCADE;
