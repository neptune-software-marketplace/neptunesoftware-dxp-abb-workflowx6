namespace Stencil {
    export const options = {
        title: "Workflow",
        stencilGraphWidth: 400,
        stencilGraphHeight: 125,
        collapsable: true,
        groups: [
            {
                name: "task",
                title: "Task",
            },
            {
                name: "useraction",
                title: "UserAction",
                graphHeight: 220,
                layoutOptions: {
                    rowHeight: 100,
                },
            },
            {
                name: "scriptaction",
                title: "Script Action",
            },
            {
                name: "event",
                title: "Event",
            },
        ],
    };

    enum task {
        UserTask = 'User Task',
        ScriptTask = 'Script Task',
    }

    enum userAction {
        Approve = 'Approve',
        Reject = 'Reject',
        Save = 'Save',
    }

    enum scriptAction {
        True = 'True',
        False = 'False',
    }

    enum event {
        Cancel = 'Cancel',
        Completed = 'Completed'
    }

    export function init(target) {
        const stencil = new Addon.Stencil({ target, ...options });
        document.getElementById("stencilCanvas").appendChild(stencil.container);

        const userTask = TaskNode.getNode(task.UserTask);
        const scriptTask = TaskNode.getNode(task.ScriptTask);
        const userActionApprove = UserActionNode.getNode(userAction.Approve);
        const userActionReject = UserActionNode.getNode(userAction.Reject);
        const userActionSave = UserActionNode.getNode(userAction.Save);
        const scriptActionTrue = ScriptActionNode.getNode(scriptAction.True);
        const scriptActionFalse = ScriptActionNode.getNode(scriptAction.False);
        const eventCancel = EventNode.getNode(event.Cancel);
        const eventCompleted = EventNode.getNode(event.Completed);

        stencil.load([userTask, scriptTask], "task");
        stencil.load([userActionApprove, userActionReject, userActionSave], "useraction");
        stencil.load([scriptActionTrue, scriptActionFalse], "scriptaction");
        stencil.load([eventCancel, eventCompleted], "event");
    }
}
