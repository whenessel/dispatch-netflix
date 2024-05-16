from pydantic import StrictBool, Field
from pydantic.color import Color

from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.sql.schema import UniqueConstraint
from sqlalchemy.event import listen
from sqlalchemy_utils import TSVectorType

from dispatch.database.core import Base, ensure_unique_default_per_project
from dispatch.models import DispatchBase, NameStr, ProjectMixin, PrimaryKey, Pagination
from dispatch.project.models import ProjectRead


class CasePriority(Base, ProjectMixin):
    __table_args__ = (UniqueConstraint("name", "project_id"),)
    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    page_assignee = Column(Boolean, default=False)
    color = Column(String)
    enabled = Column(Boolean, default=True)
    default = Column(Boolean, default=False)

    # This column is used to control how priorities should be displayed
    # Lower numbers will be shown first.
    view_order = Column(Integer, default=9999)

    search_vector = Column(TSVectorType("name", "description"))


listen(CasePriority.default, "set", ensure_unique_default_per_project)


# Pydantic models
class CasePriorityBase(DispatchBase):
    color: Color | None = Field(None, nullable=True)
    default: bool | None
    page_assignee: StrictBool | None
    description: str | None = Field(None, nullable=True)
    enabled: bool | None
    name: NameStr
    project: ProjectRead | None
    view_order: int | None


class CasePriorityCreate(CasePriorityBase):
    pass


class CasePriorityUpdate(CasePriorityBase):
    pass


class CasePriorityRead(CasePriorityBase):
    id: PrimaryKey | None


class CasePriorityPagination(Pagination):
    items: list[CasePriorityRead] = []
