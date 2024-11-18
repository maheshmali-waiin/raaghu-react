import type { Meta, StoryObj } from '@storybook/react';
import RdsCompKanbanBoard, { boardInfo } from "./rds-comp-kanban-board";


const meta: Meta = { 
    title: "Components/Kanban Board",
    component: RdsCompKanbanBoard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof RdsCompKanbanBoard>;

const sampleItems: boardInfo[] = [
    {
        cardId: 1,
        name: "Board 1",
        subCardIndex: 0,
        subCards: [
            {
                ticketId: "1",
                ticketPriority: "High",
                ticketQuestion: "Question 1",
                ticketDate: "2021-08-01",
                SubcardId: 0,
                assignedToName: "abc",
                assignedTo:"/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAB4AHgDASIAAhEBAxEB/8QAGwABAQEBAQEBAQAAAAAAAAAAAAYFBwMEAgH/xAA/EAACAQMBAgoHBgMJAAAAAAAAAQIDBAURBhIWITFBUVRhkaHRExQicYGS0gcVMlJisULB8CMkMzdTgrLC8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCzAAAAAAAAAAAAAAAAAAAAAAAAAAAAr9i9nKd9B3+RWttF/wBnB8Sm1yt9i8wJm0sLu8f91tq1Zc7hBtd59stncvGO88fW07Fq+4rMltra2bdvi7ZVYw9lS13YL3Jc3cZsdvb7f9q1tnHoW8n36gSdxb1rao4XFKpSn+WcWmeZ0vG5/GbRx9Sv7dQqz/DCo9VJ/plypkdtThJYW/UItztqibpTfL2p9q4u8DFAAAAAAAAAAAAAOXRLlOkbXVHiNk6FlQe65qNBtdGmsu/TxOdUP8enr+ZfuX/2m6+o2XR6SX7Ac9AAH6pzlTnGcG4yi001ypnRdqWspsXRvWl6SMYVeLmb4pfuznB0V/5bcf8Ao/8AcDnQAAAAAAAAAAAAAdJzsPv3YuldUvaqwjGtp2rikv8Akc2LH7P8zG2ryx1zJKlWlvUm+RT6Pj+67QI4FFtjgpYq9dahF+p1pNw0/gf5fInQP3b0Z3FenRpJyqVJKMV0t8h0LbScMZsrbY6ElvT3aa7Yx0bffp3ny7B4VUIPL32kEot0lPiSjzzfw5Cc2pyzy+VnVi36vD2KS/T0/EDHAAAAAAAAAAAAutmtmLajZxyWacd3d31SnxRjHmcvICYw+Cv8rJeq0X6LXjqz4oL48/wLWw2dxWApRu8pXhUqxeqlU4op/pjzs+HM7bRpJ0MNSjux9lVZx0X+2Pn3EZe3lxe1nVu6061R88nr3AUG1e08sqna2idOzT4978VR82vQuwmAALnZ3ayjVtlY5tJxcdxVXHWMo9El/PvPXLbGW91D1jDV4xUvaUG96EvdL/0gT78VmL7Fz3rOu4x54Pji/egPLIY+6x1b0V5RnSlza8j9z5GfKdFxu0+OzVJWeXoU6c58Wk+OnJ9j5n/WpgbXbNPEtXNpvSs5S0afG6b6H2doEyAAAAAAADT2aslf5y0t5pOm570l0xS1a+OniUn2k5CTr0MfTk1BR9LUS53yJP8ArnMjYWtSobR0PTNR31KEW3/E1xd/J8Si2m2Uvcrl6t3Qr28YTUUo1NU1otOZMDnoK7gHkesWnzS+kcA8j1i0+aX0gSIK7gHkesWnzS+kcA8j1i0+aX0gSIK7gHkesWnzS+kcA8j1i0+aX0gSJ0nZet9+7K1rO5e9OCdHefRprF/D+RicA8j1i0+aX0lHslha2Bt7yV5XouM92WsG9IpJ6ttpdPgBy+UXGTjJaSXE0fw9bycat3WqU/wSnKS9zZ5AAAAAABPvNWntFl6cFCF/W0S52n4sygBr8Jsx1+r4eQ4TZjr9Xw8jIAGvwmzHX6vh5DhNmOv1fDyMgAa/CbMdfq+HkOE2Y6/V8PIyABr8Jsx1+r4eR4XuZyN7S9FdXlWpTfLHXRP36GeAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="
            },
            {
                ticketId: "2",
                ticketPriority: "Low",
                ticketQuestion: "Question 2",
                ticketDate: "2021-08-01",
                SubcardId: 1,
            }
        ]
    },{
        cardId: 2,
        name: "Board 2",
        subCardIndex: 0,
        subCards: [
            {
                ticketId: "1",
                ticketPriority: "Moderate",
                ticketQuestion: "Question 2.1",
                ticketDate: "2021-08-01",
                SubcardId: 0,
            },
            {
                ticketId: "2",
                ticketPriority: "High",
                ticketQuestion: "Question 2.2",
                ticketDate: "2021-08-01",
                SubcardId: 1,
            }
        ]
    },
];


export default meta;
type Story = StoryObj<typeof RdsCompKanbanBoard>;

export const Default: Story = {
    args: {
        //boardName: "Board123",
        boardData: sampleItems,
        allowAddingDynamicData : true
    }
} satisfies Story;




