"""empty message

Revision ID: 2f4a8cf1505a
Revises: 5d677f12dd07
Create Date: 2021-04-21 15:05:40.592721

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2f4a8cf1505a'
down_revision = '5d677f12dd07'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('venues',
    sa.Column('venue_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('venue_name', sa.String(length=255), nullable=False),
    sa.Column('venue_capacity', sa.String(length=255), nullable=False),
    sa.Column('authority_name', sa.String(length=255), nullable=False),
    sa.Column('authority_contact', sa.DateTime(), nullable=True),
    sa.Column('auth_code', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('venue_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('venues')
    # ### end Alembic commands ###
