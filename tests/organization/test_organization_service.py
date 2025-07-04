def test_get(session, organization):
    from dispatch.organization.service import get

    t_organization = get(db_session=session, organization_id=organization.id)
    assert t_organization.id == organization.id


def test_get_all(session, organizations):
    from dispatch.organization.service import get_all

    t_organizations = get_all(db_session=session).all()
    assert t_organizations


def test_create(session):
    from dispatch.organization.service import create
    from dispatch.organization.models import OrganizationCreate

    name = "name"
    description = "description"
    default = True
    banner_enabled = True
    banner_color = "red"
    banner_text = "banner"

    organization_in = OrganizationCreate(
        name=name,
        description=description,
        default=default,
        banner_enabled=banner_enabled,
        banner_color=banner_color,
        banner_text=banner_text,
    )
    organization = create(db_session=session, organization_in=organization_in)
    assert organization


def test_update(session, organization):
    from dispatch.organization.service import update
    from dispatch.organization.models import OrganizationUpdate

    description = "Updated description"

    organization_in = OrganizationUpdate(
        description=description,
    )

    organization = update(
        db_session=session,
        organization=organization,
        organization_in=organization_in,
    )

    assert organization.description == description


def test_delete(session, organization):
    from dispatch.organization.service import delete, get

    delete(db_session=session, organization_id=organization.id)
    assert not get(db_session=session, organization_id=organization.id)


def test_get_by_name_or_default__name(session, organization):
    from dispatch.organization.models import OrganizationRead
    from dispatch.organization.service import get_by_name_or_default

    organization_in = OrganizationRead.from_orm(organization)
    result = get_by_name_or_default(db_session=session, organization_in=organization_in)
    assert result.id == organization.id


def test_get_by_name_or_default__default(session, organization):
    from dispatch.organization.models import OrganizationRead
    from dispatch.organization.service import get_by_name_or_default

    # Ensure only one default organization
    for org in session.query(type(organization)).all():
        org.default = False
    organization.default = True
    session.commit()
    # Pass an OrganizationRead with a non-existent name
    organization_in = OrganizationRead(name="nonexistent")
    result = get_by_name_or_default(db_session=session, organization_in=organization_in)
    assert result.id == organization.id
