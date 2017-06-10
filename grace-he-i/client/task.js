//-------------------------------------
//input needed in module input variables
/*
var m_var=$vm.module_list[$vm.vm['__ID'].name].var;
var client_pid=m_var.client_tid;
var sql_client=m_var.sql_client;
*/
var sql_client=_sys.config.parameters.sql_client;
var ids=_sys.config.module_ids;
var client_pid=_mlist[ids.clients].table_id;
var document_type_list_tid=_mlist[ids.doc_type_list].table_id;
//-------------------------------------
var _task_fields='';
//-------------------------------------
_set_req=function(){
    var client_where="";
    var client_uid=$vm.vm['__ID'].op.client_uid;

    if(client_uid!==undefined){
        client_where=" where uid="+client_uid;
    }


    var sql="with client as (select clientUID=UID,sql_client="+sql_client+" from [FORM-"+client_pid+"] "+client_where+" )";
    sql+=",task as (select ID,UID,PUID,S3,Information,sql_client,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"-@S1] join client on PUID=clientUID)";
    sql+="select ID,S3,UID,Information,client=sql_client,DateTime,Author,RowNum,dirty=0, valid=1 from task where RowNum between @I6 and @I7";
    var sql_n="with client as (select clientUID=UID from [TABLE-"+client_pid+"] )";
    sql_n+=" select count(ID) from [TABLE-"+_db_pid+"-@S1] join client on PUID=clientUID";

    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
_set_req_export=function(){
/*    _fields_e="client ID|clientUID,client,"+_task_fields
    var sql="with client as (select Site=S1,clientUID=UID,sql_client="+_module.var.sql_client+",RowNum=row_number() over (order by ID DESC) from [FORM-"+client_pid+"]"+site_sql_where+" )";
    sql+=",task as (select ID,UID,PUID,S3,Information,DateTime,Author from [FORM-"+_db_pid+"-@S1])";
    sql+=" select ID,clientUID,Site,Information,client=sql_client,DateTime,Author from client left join task on PUID=clientUID";
    _set_from_to();
    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
    else sql+=" order by clientUID DESC";
    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
    */
}
//-------------------------------------
var _default_cell_render=function(records,I,field,td,set_value,source){
    switch(field){
    }
}
//-------------------------------------
_new_pre_data_process=function(){
    if($vm.vm['__ID'].op.client_uid!==undefined) _records[0].client_uid=$vm.vm['__ID'].op.client_uid;
    if($vm.vm['__ID'].op.client_name!==undefined) _records[0].client=$vm.vm['__ID'].op.client_name;
}
//-------------------------------------
