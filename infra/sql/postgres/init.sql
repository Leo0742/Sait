CREATE SCHEMA IF NOT EXISTS auth_service;
CREATE SCHEMA IF NOT EXISTS identity_profile_service;
CREATE SCHEMA IF NOT EXISTS access_control_service;
CREATE SCHEMA IF NOT EXISTS tenant_management_service;
CREATE SCHEMA IF NOT EXISTS event_service;
CREATE SCHEMA IF NOT EXISTS event_config_service;
CREATE SCHEMA IF NOT EXISTS registration_service;
CREATE SCHEMA IF NOT EXISTS team_service;
CREATE SCHEMA IF NOT EXISTS checkin_service;
CREATE SCHEMA IF NOT EXISTS volunteers_service;
CREATE SCHEMA IF NOT EXISTS results_service;
CREATE SCHEMA IF NOT EXISTS schedule_program_service;
CREATE SCHEMA IF NOT EXISTS cms_service;
CREATE SCHEMA IF NOT EXISTS media_files_service;
CREATE SCHEMA IF NOT EXISTS notifications_service;
CREATE SCHEMA IF NOT EXISTS audit_log_service;
CREATE SCHEMA IF NOT EXISTS workflow_orchestrator;
CREATE SCHEMA IF NOT EXISTS analytics_ingestion_service;
CREATE SCHEMA IF NOT EXISTS analytics_query_service;
CREATE SCHEMA IF NOT EXISTS search_index_service;
CREATE SCHEMA IF NOT EXISTS ai_intelligence_service;

CREATE TABLE IF NOT EXISTS auth_service.accounts (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS auth_service.auth_challenges (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  consumed_at TIMESTAMPTZ NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_auth_challenges_email ON auth_service.auth_challenges(email);

CREATE TABLE IF NOT EXISTS auth_service.sessions (
  id UUID PRIMARY KEY,
  account_id UUID NOT NULL REFERENCES auth_service.accounts(id),
  person_id UUID NOT NULL,
  refresh_token_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  revoked_at TIMESTAMPTZ NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS identity_profile_service.persons (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT NULL,
  last_name TEXT NULL,
  phone TEXT NULL,
  birth_date DATE NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS identity_profile_service.account_person_links (
  account_id UUID PRIMARY KEY,
  person_id UUID NOT NULL REFERENCES identity_profile_service.persons(id),
  linked_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_account_person_links_person_id ON identity_profile_service.account_person_links(person_id);

CREATE TABLE IF NOT EXISTS access_control_service.global_role_assignments (
  account_id UUID NOT NULL,
  role TEXT NOT NULL,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (account_id, role)
);

CREATE TABLE IF NOT EXISTS access_control_service.event_role_assignments (
  account_id UUID NOT NULL,
  event_id TEXT NOT NULL,
  role TEXT NOT NULL,
  station_id TEXT NULL,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (account_id, event_id, role, station_id)
);
