from datetime import datetime
from pydantic import Field

from sqlalchemy import Column, Integer, ForeignKey, DateTime, String, Numeric
from sqlalchemy_utils import TSVectorType
from sqlalchemy.orm import relationship

from dispatch.database.core import Base
from dispatch.individual.models import IndividualContactReadMinimal
from dispatch.models import DispatchBase, TimeStampMixin, FeedbackMixin, PrimaryKey, Pagination
from dispatch.project.models import ProjectRead

from .enums import ServiceFeedbackRating


class ServiceFeedback(TimeStampMixin, FeedbackMixin, Base):
    # Columns
    id = Column(Integer, primary_key=True)
    schedule = Column(String)
    hours = Column(Numeric(precision=10, scale=2))
    shift_start_at = Column(DateTime)
    shift_end_at = Column(DateTime)

    # Relationships
    individual_contact_id = Column(Integer, ForeignKey("individual_contact.id"))

    project_id = Column(Integer, ForeignKey("project.id"))
    project = relationship("Project")

    search_vector = Column(
        TSVectorType(
            "feedback",
            "rating",
            regconfig="pg_catalog.simple",
        )
    )


# Pydantic models
class ServiceFeedbackBase(DispatchBase):
    feedback: str | None = Field(None, nullable=True)
    hours: float | None
    individual: IndividualContactReadMinimal | None
    rating: ServiceFeedbackRating = ServiceFeedbackRating.little_effort
    schedule: str | None
    shift_end_at: datetime | None
    shift_start_at: datetime | None
    project: ProjectRead | None
    created_at: datetime | None


class ServiceFeedbackCreate(ServiceFeedbackBase):
    pass


class ServiceFeedbackUpdate(ServiceFeedbackBase):
    id: PrimaryKey = None


class ServiceFeedbackRead(ServiceFeedbackBase):
    id: PrimaryKey
    project: ProjectRead | None


class ServiceFeedbackPagination(Pagination):
    items: list[ServiceFeedbackRead]
    total: int
