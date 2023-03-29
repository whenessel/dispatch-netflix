"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={description:"Describes the plugin interface for each type of plugin."},s="Interfaces",o={unversionedId:"contributing/plugins/interfaces",id:"contributing/plugins/interfaces",title:"Interfaces",description:"Describes the plugin interface for each type of plugin.",source:"@site/docs/contributing/plugins/interfaces.mdx",sourceDirName:"contributing/plugins",slug:"/contributing/plugins/interfaces",permalink:"/dispatch/docs/contributing/plugins/interfaces",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/contributing/plugins/interfaces.mdx",tags:[],version:"current",frontMatter:{description:"Describes the plugin interface for each type of plugin."}},l={},c=[{value:"Conversation",id:"conversation",level:2},{value:"Document Resolver",id:"document-resolver",level:2},{value:"Document",id:"document",level:2},{value:"Metric",id:"metric",level:2},{value:"Oncall",id:"oncall",level:2},{value:"Participant Group",id:"participant-group",level:2},{value:"Participant",id:"participant",level:2},{value:"Storage",id:"storage",level:2},{value:"Task",id:"task",level:2},{value:"Term",id:"term",level:2},{value:"Ticket",id:"ticket",level:2},{value:"Workflow",id:"workflow",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interfaces"},"Interfaces"),(0,i.kt)("p",null,"We do our best to keep this documentation up-to-date. However, the code itself is still the best place to look for the most current documentation."),(0,i.kt)("h2",{id:"conversation"},"Conversation"),(0,i.kt)("p",null,"Conversation plugins are deeply integrated within Dispatch. They server as the real-time communication channel used for incidents. By default Dispatch supports ",(0,i.kt)("inlineCode",{parentName:"p"},"Slack")," as a conversation channel, if you wish to use another platform for conversations you will need to implement the following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def create(self, name: str, participants: List[dict]):\n    """Creates a new conversation."""\n    return {\n        "id": "abc123",\n        "name": "example",\n        "weblink": "https://example.com"\n    }\n\ndef send(\n    self,\n    conversation_id: str,\n    text: str,\n    message_template: dict,\n    notification_type: str,\n    items: Optional[List] = None,\n    blocks: Optional[List] = None,\n    persist: bool = False,\n    **kwargs,\n):\n    """Sends a new message based on data and type."""\n    return {\n        "id": "abc123",\n        "timestamp": "1232324384"\n    }\n\ndef send_direct(\n    self,\n    user: str,\n    text: str,\n    message_template: dict,\n    notification_type: str,\n    items: Optional[List] = None,\n    blocks: Optional[List] = None,\n    **kwargs,\n):\n    """Sends a message directly to a user."""\n    return {\n        "id": "abc123",\n        "timestamp": "1232324384"\n    }\n\ndef send_ephemeral(\n    self,\n    conversation_id: str,\n    user: str,\n    text: str,\n    message_template: dict = None,\n    notification_type: str = None,\n    items: Optional[List] = None,\n    blocks: Optional[List] = None,\n    **kwargs,\n):\n    """Sends an ephemeral message to a user in a channel."""\n    return {\n        "id": "abc123",\n        "timestamp": "1232324384"\n    }\n\ndef add(self, conversation_id: str, participants: List[str]):\n    """Adds users to conversation."""\n    return\n\ndef open_dialog(self, trigger_id: str, dialog: dict):\n    """Opens a dialog with a user."""\n    return\n\ndef open_modal(self, trigger_id: str, modal: dict):\n    """Opens a modal with a user."""\n    return\n\ndef archive(self, conversation_id: str):\n    """Archives conversation."""\n    return\n\ndef get_participant_username(self, participant_id: str):\n    """Gets the participant\'s username."""\n    return "username"\n\ndef get_participant_email(self, participant_id: str):\n    """Gets the participant\'s email."""\n    return "username@example.com"\n\ndef get_participant_avatar_url(self, participant_id: str):\n    """Gets the participant\'s avatar url."""\n    return "https://example.com/username.png"\n\ndef set_topic(self, conversation_id: str, topic: str):\n    """Sets the conversation topic."""\n    return\n\ndef get_command_name(self, command: str):\n    """Gets the command name."""\n    return "/some-command-name"\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Not all of the above functions will make sense for your conversation, but all are called by Dispatch in various flows, implement all of the functions for full functionality.,")),(0,i.kt)("h2",{id:"document-resolver"},"Document Resolver"),(0,i.kt)("p",null,"Dispatch ships with an internal document resolver that attempts to gather documents related to an incident from within Dispatch's document store. However, you may already have a robust external document store. The interface is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get(\n        self, incident_type: str, incident_priority: str, incident_description: str, db_session=None\n    ):\n    """Get documents related to the current incident."""\n    return [{\n           "name": "foo",\n           "description": "bar",\n           "weblink": "https://example.com/bar",\n           "resource_type": "external-type",\n           "resource_id": "abc123" }]\n')),(0,i.kt)("h2",{id:"document"},"Document"),(0,i.kt)("p",null,"While there are other plugin interfaces for document management ","(","storage, resolution, etc.,",")",", this interface focuses solely on updating the document itself. Documents are a part of the incident document template system, finding and replacing key terms and injecting incident-specific information. Currently, we only ever update document using this interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' def update(self, document_id: str, **kwargs):\n     """Replaces text in document."""\n     return\n')),(0,i.kt)("h2",{id:"metric"},"Metric"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"metric")," is an optional plugin that allows you to use whatever metric system you have deployed within your organization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def gauge(self, name: str, value, tags=None):\n    """Create a new gauge metric."""\n    return\n\ndef counter(self, name: str, value=None, tags=None):\n    """Create a new counter metric."""\n    return\n\ndef timer(self, name: str, value, tags=None):\n    """Create a new timer metric."""\n    return\n')),(0,i.kt)("h2",{id:"oncall"},"Oncall"),(0,i.kt)("p",null,"The on-call plugin resolves or engages individuals directly. Dispatch ship's with support for ",(0,i.kt)("inlineCode",{parentName:"p"},"PagerDuty")," but also provides this interface to add your own."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get(self, service_id: str = None, service_name: str = None):\n    """Gets the oncall person."""\n    return "joe@example.com"\n\ndef page(\n    self, service_id: str, incident_name: str, incident_title: str, incident_description: str\n):\n    """Pages the oncall person."""\n    return\n')),(0,i.kt)("h2",{id:"participant-group"},"Participant Group"),(0,i.kt)("p",null,'Often permissions for resources are managed by external entities or "groups". By default, Dispatch uses Google Groups to help manage these permissions as these groups\' permission integrate nicely with the rest of the G Suite.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def create(\n        self, name: str, participants: List[str], description: str = None, role: str = "MEMBER"\n    ):\n    """Creates a new participant group."""\n    return {\n        "weblink": "https://example.com/my-incident",\n        "email": "my-incident@example.com"\n        "name": "my-incident"\n    }\n\ndef add(self, email: str, participants: List[str], role: str = "MEMBER"):\n    """Adds participants to existing participant group."""\n    return\n\ndef remove(self, email: str, participants: List[str]):\n    """Removes participants from existing participant group."""\n    return\n\ndef delete(self, email: str):\n    """Deletes an existing participant group."""\n    return\n')),(0,i.kt)("h2",{id:"participant"},"Participant"),(0,i.kt)("p",null,"Similar to the document resolver plugin, Dispatch can pull participants into incidents automatically. To accomplish this, Dispatch ships with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchParticipantPlugin"),". Internal to Dispatch ","(","services, individuals, teams",")",", this plugin determines who should be involved with the incident itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get(\n    self,\n    incident_type: str,\n    incident_priority: str,\n    incident_description: str,\n    db_session=None,\n):\n    """Fetches participants from Dispatch."""\n    return\n')),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"By default, Dispatch uses Google Drive for all incident artifact storage. It provides a standard interface for all incident participants and tight integration with the rest of the G Suite."),(0,i.kt)("p",null,"Each incident gets its own dedicated space ","(","a Team Drive in the case of Drive",")",". From there, Dispatch expects the following interface when dealing with incident artifacts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get(self, file_id: str, mime_type=None):\n    """Fetches document text."""\n    return "Document text"\n\ndef create(self, name: str, participants: List[str], role: str = Roles.file_organizer.value):\n    """Creates a new drive."""\n    return {\n        "id": "abc123"\n        "weblink": "https://example.com",\n        "name": "example-drive"\n        "description": "This is a drive"\n    }\n\ndef delete(self, drive_id: str, empty: bool = True):\n    """Deletes a drive."""\n    return\n\ndef list(self, **kwargs):\n    """Lists all available drives."""\n    return [\n        {\n          "id": "abc123",\n          "weblink": "https://example.com",\n          "name": "example-drive"\n          "description": "This is a drive"\n        }\n    }\n\ndef add_participant(\n    self,\n    drive_or_file_id: str,\n    participants: List[str],\n    role: str = "owner",\n    user_type: str = "user",\n):\n    """Adds participants to existing drive."""\n    return\n\ndef remove_participant(self, drive_id: str, participants: List[str]):\n    """Removes participants from existing drive."""\n    return\n\ndef create_file(self, drive_id: str, name: str, file_type: str = "folder"):\n    """Creates a new file in existing drive."""\n    return {\n        "id": "abc123",\n        "weblink": "https://example.com",\n        "name": "file-name",\n    }\n\ndef delete_file(self, drive_id: str, file_id: str):\n    """Removes a file from existing drive."""\n    return\n\ndef copy_file(self, drive_id: str, file_id: str, name: str):\n    """Creates a copy of the given file and places it in the specified drive."""\n    return {\n        "id": "abc123",\n        "weblink": "https://example.com",\n        "name": "file-name",\n    }\n\ndef move_file(self, new_drive_id: str, file_id: str):\n    """Moves a file from one place to another."""\n    return {\n        "id": "abc123",\n        "weblink": "https://example.com",\n        "name": "file-name",\n    }\n\ndef archive(self, source_drive_id, dest_folder_id, folder_name):\n    """Archives a shared team drive to a specific folder."""\n    return\n\ndef list_files(self, drive_id: str, q: str = None):\n    """Lists all files in drive."""\n    return [\n        {\n            "id": "abc123",\n            "weblink": "https://example.com",\n            "name": "file-name",\n        }\n    ]\n')),(0,i.kt)("h2",{id:"task"},"Task"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This interface is not stable and will need to be refactored or generalized. Please file an issue for guidance if you are trying to extend tasks.")),(0,i.kt)("p",null,"Dispatch supports a lightweight tasking system to track incident tasks. By default, this uses the G Suit comment system to assign, create and resolve tasks. If you have an external system you'd like Dispatch to monitor, the following interface can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def list(self, file_id: str, **kwargs):\n    """Lists all available tasks."""\n    return\n')),(0,i.kt)("p",null,"The Dispatch scheduler will attempt to sync tasks every 30 seconds."),(0,i.kt)("h2",{id:"term"},"Term"),(0,i.kt)("p",null,"Term plugins are used for getting organization specific information within Dispatch from external systems and have a very simple interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get(self, **kwargs):\n    return [{\n        "text": "foo",\n        "definitions": [{\n            "text": "bar"\n        }],\n    }]\n')),(0,i.kt)("h2",{id:"ticket"},"Ticket"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def create(\n        self, title: str, incident_type: str, incident_priority: str, commander: str, reporter: str\n    ):\n    """Creates a ticket."""\n    return\n\ndef update(\n    self,\n    ticket_id: str,\n    title: str = None,\n    description: str = None,\n    incident_type: str = None,\n    priority: str = None,\n    status: str = None,\n    commander_email: str = None,\n    reporter_email: str = None,\n    conversation_weblink: str = None,\n    document_weblink: str = None,\n    storage_weblink: str = None,\n    labels: List[str] = None,\n    cost: str = None,\n):\n    """Updates ticket fields."""\n    return\n')),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This interface is not stable and will need to be refactored or generalized. Please file an issue for guidance if you are trying to extend workflow creation."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get_instance(\n        self, workflow_id: str, instance_id: str, **kwargs)\n    ):\n    """Fetches an individual workflow instance."""\n    return\n\ndef run(\n    self,\n    workflow_id: str, params: dict, **kwargs):\n):\n    """Runs the given workflow"""\n    return\n'))))}u.isMDXComponent=!0}}]);