window.onload = function(){

    function soma_total_notificacoes(){
        total = parseInt(quantidade_deficiente_auditivo.textContent) + parseInt(quantidade_deficiente_fisico.textContent) + parseInt(quantidade_deficiente_visual.textContent);
        total_de_notificacoes.textContent = total;

        total_deficientes_fisicos.textContent = quantidade_deficiente_fisico.textContent;
        total_deficientes_auditivos.textContent = quantidade_deficiente_auditivo.textContent;
        total_deficientes_visuais.textContent = quantidade_deficiente_visual.textContent;
    }

    let total_de_notificacoes = document.getElementById('total_de_notificacoes');
    total_de_notificacoes.textContent = parseInt(0);
    
    let quantidade_deficiente_fisico = document.getElementById('quantidade_deficiente_fisico');
    let percentual_deficiente_fisico = document.getElementById('percentual_deficiente_fisico');
    quantidade_deficiente_fisico.textContent = parseInt(0);
    percentual_deficiente_fisico.textContent = parseInt(0);
    
    let quantidade_deficiente_auditivo = document.getElementById('quantidade_deficiente_auditivo');
    let percentual_deficiente_auditivo = document.getElementById('percentual_deficiente_auditivo');
    quantidade_deficiente_auditivo.textContent = parseInt(0);
    percentual_deficiente_auditivo.textContent = parseInt(0);
    
    let quantidade_deficiente_visual = document.getElementById('quantidade_deficiente_visual');
    let percentual_deficiente_visual = document.getElementById('percentual_deficiente_visual');
    quantidade_deficiente_visual.textContent = parseInt(0);
    percentual_deficiente_visual.textContent = parseInt(0);

    // botoes de adicionar e subtrair

    let botao_aumentar_deficiente_fisico = document.getElementById('aumentar_deficiente_fisico');
    botao_aumentar_deficiente_fisico.addEventListener("click", function(){
        quantiaAtual = parseInt(quantidade_deficiente_fisico.textContent) + 1;
        quantidade_deficiente_fisico.textContent = quantiaAtual;
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    let botao_diminuir_deficiente_fisico = document.getElementById('diminuir_deficiente_fisico');
    botao_diminuir_deficiente_fisico.addEventListener("click", function(){
        quantiaAtual = parseInt(quantidade_deficiente_fisico.textContent) - 1;
        if (quantiaAtual < 0){
            quantiaAtual = 0;
        }
        quantidade_deficiente_fisico.textContent = quantiaAtual;
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima(); 
    });

    let botao_aumentar_deficiente_visual = document.getElementById('aumentar_deficiente_visual');
    botao_aumentar_deficiente_visual.addEventListener("click", function(){
        quantiaAtual = parseInt(quantidade_deficiente_visual.textContent) + 1;;
        quantidade_deficiente_visual.textContent = quantiaAtual;
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    let botao_diminuir_deficiente_visual = document.getElementById('diminuir_deficiente_visual');
    botao_diminuir_deficiente_visual.addEventListener("click", function(){
        quantiaAtual = parseInt(quantidade_deficiente_visual.textContent) - 1;
        if (quantiaAtual < 0){
            quantiaAtual = 0;
        }
        quantidade_deficiente_visual.textContent = quantiaAtual;
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    let botao_aumentar_deficiente_auditivo = document.getElementById('aumentar_deficiente_auditivo');
    botao_aumentar_deficiente_auditivo.addEventListener("click", function(){
        quantiaAtual = parseInt(quantidade_deficiente_auditivo.textContent) + 1;
        quantidade_deficiente_auditivo.textContent = quantiaAtual;
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    let botao_diminuir_deficiente_auditivo = document.getElementById('diminuir_deficiente_auditivo');
    botao_diminuir_deficiente_auditivo.addEventListener("click", function(){
        quantiaAtual = parseInt(quantidade_deficiente_auditivo.textContent) - 1;
        if (quantiaAtual < 0){
            quantiaAtual = 0;
        }
        quantidade_deficiente_auditivo.textContent = quantiaAtual;
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    // botao de zerar

    let botao_zerar_deficiente_fisico = document.getElementById('zerar_deficiente_fisico');
    let botao_zerar_deficiente_auditivo = document.getElementById('zerar_deficiente_auditivo');
    let botao_zerar_deficiente_visual = document.getElementById('zerar_deficiente_visual');

    botao_zerar_deficiente_fisico.addEventListener("click", function(){
        quantidade_deficiente_fisico.textContent = parseInt(0);
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    botao_zerar_deficiente_auditivo.addEventListener("click", function(){
        quantidade_deficiente_auditivo.textContent = parseInt(0);
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    botao_zerar_deficiente_visual.addEventListener("click", function(){
        quantidade_deficiente_visual.textContent = parseInt(0);
        soma_total_notificacoes();
        percentual_tabela_total();
        verifica_notificacao_maxima();
    });

    // calcula percentual da tabela total de notificacoes

    function percentual_tabela_total(){
        let int_deficiente_fisico = parseInt(quantidade_deficiente_fisico.textContent);
        let int_deficiente_visual = parseInt(quantidade_deficiente_visual.textContent);
        let int_deficiente_auditivo = parseInt(quantidade_deficiente_auditivo.textContent);
        let total_deficientes = parseInt(total_de_notificacoes.textContent);

        if (total_deficientes === 0){
            percentual_deficiente_fisico.textContent = 0;
            percentual_deficiente_visual.textContent = 0;
            percentual_deficiente_auditivo.textContent = 0;
        } else {
            percentual_deficiente_fisico.textContent = parseFloat(((int_deficiente_fisico * 100) / total_deficientes).toFixed(2));
            percentual_deficiente_visual.textContent = parseFloat(((int_deficiente_visual * 100) / total_deficientes).toFixed(2));
            percentual_deficiente_auditivo.textContent = parseFloat(((int_deficiente_auditivo * 100) / total_deficientes).toFixed(2));
        }
    }

    // tabela de problemas encontrados
    // fisicos

    let total_deficientes_fisicos = document.getElementById('total_deficientes_fisicos');
    total_deficientes_fisicos.textContent = parseInt(quantidade_deficiente_fisico.textContent);
    
    let quantidade_rampa_destruida = document.getElementById('quantidade_rampa_destruida');
    quantidade_rampa_destruida.textContent = parseInt(0);

    let percentual_rampa_destruida = document.getElementById('percentual_rampa_destruida');
    percentual_rampa_destruida.textContent = parseInt(0);

    let botao_adicionar_rampa_destruida = document.getElementById('adicionar_rampa_destruida');
    botao_adicionar_rampa_destruida.addEventListener("click", function(){
        adicionar(quantidade_rampa_destruida, total_deficientes_fisicos);
    });

    let botao_diminuir_rampa_destruida = document.getElementById('diminuir_rampa_destruida');
    botao_diminuir_rampa_destruida.addEventListener("click", function(){
        diminuir(quantidade_rampa_destruida);
    });

    let quantidade_ausencia_de_rampa = document.getElementById('quantidade_ausencia_de_rampa');
    quantidade_ausencia_de_rampa.textContent = parseInt(0);

    let percentual_ausencia_de_rampa = document.getElementById('percentual_ausencia_de_rampa');
    percentual_ausencia_de_rampa.textContent = parseInt(0);

    let botao_adicionar_ausencia_de_rampa = document.getElementById('adicionar_ausencia_de_rampa');
    botao_adicionar_ausencia_de_rampa.addEventListener("click", function(){
        adicionar(quantidade_ausencia_de_rampa, total_deficientes_fisicos);
    });

    let botao_diminuir_ausencia_de_rampa = document.getElementById('diminuir_ausencia_de_rampa');
    botao_diminuir_ausencia_de_rampa.addEventListener("click", function(){
        diminuir(quantidade_ausencia_de_rampa);
    });

    let quantidade_calcada_estreita = document.getElementById('quantidade_calcada_estreita');
    quantidade_calcada_estreita.textContent = parseInt(0);

    let percentual_calcada_estreita = document.getElementById('percentual_calcada_estreita');
    percentual_calcada_estreita.textContent = parseInt(0);

    let botao_adicionar_calcada_estreita = document.getElementById('adicionar_calcada_estreita');
    botao_adicionar_calcada_estreita.addEventListener("click", function(){
        adicionar(quantidade_calcada_estreita, total_deficientes_fisicos);
    });

    let botao_diminuir_calcada_estreita = document.getElementById('diminuir_calcada_estreita');
    botao_diminuir_calcada_estreita.addEventListener("click", function(){
        diminuir(quantidade_calcada_estreita);
    });

    let quantidade_calcada_esburacada_fisico = document.getElementById('quantidade_calcada_esburacada_fisico');
    quantidade_calcada_esburacada_fisico.textContent = parseInt(0);

    let percentual_calcada_esburacada_fisico = document.getElementById('percentual_calcada_esburacada_fisico');
    percentual_calcada_esburacada_fisico.textContent = parseInt(0);

    let botao_adicionar_calcada_esburacada_fisico = document.getElementById('adicionar_calcada_esburacada_fisico');
    botao_adicionar_calcada_esburacada_fisico.addEventListener("click", function(){
        adicionar(quantidade_calcada_esburacada_fisico, total_deficientes_fisicos);
    });

    let botao_diminuir_calcada_esburacada_fisico = document.getElementById('diminuir_calcada_esburacada_fisico');
    botao_diminuir_calcada_esburacada_fisico.addEventListener("click", function(){
        diminuir(quantidade_calcada_esburacada_fisico);
    });

    let quantidade_rua_ingrime = document.getElementById('quantidade_rua_ingrime');
    quantidade_rua_ingrime.textContent = parseInt(0);

    let percentual_rua_ingrime = document.getElementById('percentual_rua_ingrime');
    percentual_rua_ingrime.textContent = parseInt(0);

    let botao_adicionar_calcada_rua_ingrime = document.getElementById('adicionar_calcada_rua_ingrime');
    botao_adicionar_calcada_rua_ingrime.addEventListener("click", function(){
        adicionar(quantidade_rua_ingrime, total_deficientes_fisicos);
    });

    let botao_diminuir_calcada_rua_ingrime = document.getElementById('diminuir_calcada_rua_ingrime');
    botao_diminuir_calcada_rua_ingrime.addEventListener("click", function(){
        diminuir(quantidade_rua_ingrime);
    });

    let quantidade_ausencia_vagas_estacionamento = document.getElementById('quantidade_ausencia_vagas_estacionamento');
    quantidade_ausencia_vagas_estacionamento.textContent = parseInt(0);

    let percentual_ausencia_vagas_estacionamento = document.getElementById('percentual_ausencia_vagas_estacionamento');
    percentual_ausencia_vagas_estacionamento.textContent = parseInt(0);

    let botao_adicionar_calcada_ausencia_vagas_estacionamento = document.getElementById('adicionar_calcada_ausencia_vagas_estacionamento');
    botao_adicionar_calcada_ausencia_vagas_estacionamento.addEventListener("click", function(){
        adicionar(quantidade_ausencia_vagas_estacionamento, total_deficientes_fisicos);
    });

    let botao_diminuir_calcada_ausencia_vagas_estacionamento = document.getElementById('diminuir_calcada_ausencia_vagas_estacionamento');
    botao_diminuir_calcada_ausencia_vagas_estacionamento.addEventListener("click", function(){
        diminuir(quantidade_ausencia_vagas_estacionamento);
    });

    // problemas deficientes auditivos

    let total_deficientes_auditivos = document.getElementById('total_deficientes_auditivos');
    total_deficientes_auditivos.textContent = parseInt(quantidade_deficiente_auditivo.textContent);

    let quantidade_ausencia_alerta_visual_emergencia = document.getElementById('quantidade_ausencia_alerta_visual_emergencia');
    quantidade_ausencia_alerta_visual_emergencia.textContent = parseInt(0);

    let percentual_ausencia_alerta_visual_emergencia = document.getElementById('percentual_ausencia_alerta_visual_emergencia');
    percentual_ausencia_alerta_visual_emergencia.textContent = parseInt(0);

    let botao_adicionar_ausencia_alerta_visual_emergencia = document.getElementById('adicionar_ausencia_alerta_visual_emergencia');
    botao_adicionar_ausencia_alerta_visual_emergencia.addEventListener("click", function(){
        adicionar(quantidade_ausencia_alerta_visual_emergencia, total_deficientes_auditivos);
    });

    let botao_diminuir_ausencia_alerta_visual_emergencia = document.getElementById('diminuir_ausencia_alerta_visual_emergencia');
    botao_diminuir_ausencia_alerta_visual_emergencia.addEventListener("click", function(){
        diminuir(quantidade_ausencia_alerta_visual_emergencia);
    });

    let quantidade_ausencia_placa_informativa_da_rua = document.getElementById('quantidade_ausencia_placa_informativa_da_rua');
    quantidade_ausencia_placa_informativa_da_rua.textContent = parseInt(0);

    let percentual_ausencia_placa_informativa_da_rua = document.getElementById('percentual_ausencia_placa_informativa_da_rua');
    percentual_ausencia_placa_informativa_da_rua.textContent = parseInt(0);

    let botao_adicionar_ausencia_placa_informativa_da_rua = document.getElementById('adicionar_ausencia_placa_informativa_da_rua');
    botao_adicionar_ausencia_placa_informativa_da_rua.addEventListener("click", function(){
        adicionar(quantidade_ausencia_placa_informativa_da_rua, total_deficientes_auditivos);
    });

    let botao_diminuir_ausencia_placa_informativa_da_rua = document.getElementById('diminuir_ausencia_placa_informativa_da_rua');
    botao_diminuir_ausencia_placa_informativa_da_rua.addEventListener("click", function(){
        diminuir(quantidade_ausencia_placa_informativa_da_rua);
    });

    let quantidade_ausencia_vagas_estacionamento_preferenciais = document.getElementById('quantidade_ausencia_vagas_estacionamento_preferenciais');
    quantidade_ausencia_vagas_estacionamento_preferenciais.textContent = parseInt(0);

    let percentual_ausencia_vagas_estacionamento_preferenciais = document.getElementById('percentual_ausencia_vagas_estacionamento_preferenciais');
    percentual_ausencia_vagas_estacionamento_preferenciais.textContent = parseInt(0);

    let botao_adicionar_ausencia_vagas_estacionamento_preferenciais = document.getElementById('adicionar_ausencia_vagas_estacionamento_preferenciais');
    botao_adicionar_ausencia_vagas_estacionamento_preferenciais.addEventListener("click", function(){
        adicionar(quantidade_ausencia_vagas_estacionamento_preferenciais, total_deficientes_auditivos);
    });

    let botao_diminuir_ausencia_vagas_estacionamento_preferenciais = document.getElementById('diminuir_ausencia_vagas_estacionamento_preferenciais');
    botao_diminuir_ausencia_vagas_estacionamento_preferenciais.addEventListener("click", function(){
        diminuir(quantidade_ausencia_vagas_estacionamento_preferenciais);
    });

    // visuais

    let total_deficientes_visuais = document.getElementById('total_deficientes_visuais');
    total_deficientes_visuais.textContent = quantidade_deficiente_visual.textContent;

    let quantidade_ausencia_piso_podotactil = document.getElementById('quantidade_ausencia_piso_podotactil');
    quantidade_ausencia_piso_podotactil.textContent = parseInt(0);

    let percentual_ausencia_piso_podotactil = document.getElementById('percentual_ausencia_piso_podotactil');
    percentual_ausencia_piso_podotactil.textContent = parseInt(0);

    let botao_adicionar_ausencia_piso_podotactil = document.getElementById('adicionar_ausencia_piso_podotactil');
    botao_adicionar_ausencia_piso_podotactil.addEventListener("click", function(){
        adicionar(quantidade_ausencia_piso_podotactil, total_deficientes_visuais);
    });

    let botao_diminuir_ausencia_piso_podotactil = document.getElementById('diminuir_ausencia_piso_podotactil');
    botao_diminuir_ausencia_piso_podotactil.addEventListener("click", function(){
        diminuir(quantidade_ausencia_piso_podotactil);
    });

    let quantidade_podotactil_danificado = document.getElementById('quantidade_podotactil_danificado');
    quantidade_podotactil_danificado.textContent = parseInt(0);

    let percentual_podotactil_danificado = document.getElementById('percentual_podotactil_danificado');
    percentual_podotactil_danificado.textContent = parseInt(0);

    let botao_adicionar_podotactil_danificado = document.getElementById('adicionar_podotactil_danificado');
    botao_adicionar_podotactil_danificado.addEventListener("click", function(){
        adicionar(quantidade_podotactil_danificado, total_deficientes_visuais);
    });

    let botao_diminuir_podotactil_danificado = document.getElementById('diminuir_podotactil_danificado');
    botao_diminuir_podotactil_danificado.addEventListener("click", function(){
        diminuir(quantidade_podotactil_danificado);
    });

    let quantidade_calcada_esburacada_visual = document.getElementById('quantidade_calcada_esburacada_visual');
    quantidade_calcada_esburacada_visual.textContent = parseInt(0);

    let percentual_calcada_esburacada_visual = document.getElementById('percentual_calcada_esburacada_visual');
    percentual_calcada_esburacada_visual.textContent = parseInt(0);

    let botao_adicionar_calcada_esburacada_visual = document.getElementById('adicionar_calcada_esburacada_visual');
    botao_adicionar_calcada_esburacada_visual.addEventListener("click", function(){
        adicionar(quantidade_calcada_esburacada_visual, total_deficientes_visuais);
    });

    let botao_diminuir_calcada_esburacada_visual = document.getElementById('diminuir_calcada_esburacada_visual');
    botao_diminuir_calcada_esburacada_visual.addEventListener("click", function(){
        diminuir(quantidade_calcada_esburacada_visual);
    });

    // 3

    let quantidade_ausencia_marcacao_braile = document.getElementById('quantidade_ausencia_marcacao_braile');
    quantidade_ausencia_marcacao_braile.textContent = parseInt(0);

    let percentual_ausencia_marcacao_braile = document.getElementById('percentual_ausencia_marcacao_braile');
    percentual_ausencia_marcacao_braile.textContent = parseInt(0);

    let botao_adicionar_ausencia_marcacao_braile = document.getElementById('adicionar_ausencia_marcacao_braile');
    botao_adicionar_ausencia_marcacao_braile.addEventListener("click", function(){
        adicionar(quantidade_ausencia_marcacao_braile, total_deficientes_visuais);
    });

    let botao_diminuir_ausencia_marcacao_braile = document.getElementById('diminuir_ausencia_marcacao_braile');
    botao_diminuir_ausencia_marcacao_braile.addEventListener("click", function(){
        diminuir(quantidade_ausencia_marcacao_braile);
    });

    // 4

    let quantidade_calcada_obstruida = document.getElementById('quantidade_calcada_obstruida');
    quantidade_calcada_obstruida.textContent = parseInt(0);

    let percentual_calcada_obstruida = document.getElementById('percentual_calcada_obstruida');
    percentual_calcada_obstruida.textContent = parseInt(0);

    let botao_adicionar_calcada_obstruida = document.getElementById('adicionar_calcada_obstruida');
    botao_adicionar_calcada_obstruida.addEventListener("click", function(){
        adicionar(quantidade_calcada_obstruida, total_deficientes_visuais);
    });

    let botao_diminuir_calcada_obstruida = document.getElementById('diminuir_calcada_obstruida');
    botao_diminuir_calcada_obstruida.addEventListener("click", function(){
        diminuir(quantidade_calcada_obstruida);
    });

    // verificacao das tabelas de notificacoes

    function verifica_notificacao_maxima(){
        // fisicos
        if (parseInt(quantidade_rampa_destruida.textContent) > parseInt(total_deficientes_fisicos.textContent)){
            quantidade_rampa_destruida.textContent = parseInt(total_deficientes_fisicos.textContent);
        }
        if (parseInt(quantidade_ausencia_de_rampa.textContent) > parseInt(total_deficientes_fisicos.textContent)){
            quantidade_ausencia_de_rampa.textContent = parseInt(total_deficientes_fisicos.textContent);
        }
        if (parseInt(quantidade_calcada_estreita.textContent) > parseInt(total_deficientes_fisicos.textContent)){
            quantidade_calcada_estreita.textContent = parseInt(total_deficientes_fisicos.textContent);
        }
        if (parseInt(quantidade_calcada_esburacada_fisico.textContent) > parseInt(total_deficientes_fisicos.textContent)){
            quantidade_calcada_esburacada_fisico.textContent = parseInt(total_deficientes_fisicos.textContent);
        }
        if (parseInt(quantidade_rua_ingrime.textContent) > parseInt(total_deficientes_fisicos.textContent)){
            quantidade_rua_ingrime.textContent = parseInt(total_deficientes_fisicos.textContent);
        }
        if (parseInt(quantidade_ausencia_vagas_estacionamento.textContent) > parseInt(total_deficientes_fisicos.textContent)){
            quantidade_ausencia_vagas_estacionamento.textContent = parseInt(total_deficientes_fisicos.textContent);
        }
        // auditivos
        if (parseInt(quantidade_ausencia_alerta_visual_emergencia.textContent) > parseInt(total_deficientes_auditivos.textContent)){
            quantidade_ausencia_alerta_visual_emergencia.textContent = parseInt(total_deficientes_auditivos.textContent);
        }
        if (parseInt(quantidade_ausencia_placa_informativa_da_rua.textContent) > parseInt(total_deficientes_auditivos.textContent)){
            quantidade_ausencia_placa_informativa_da_rua.textContent = parseInt(total_deficientes_auditivos.textContent);
        }
        if (parseInt(quantidade_ausencia_vagas_estacionamento_preferenciais.textContent) > parseInt(total_deficientes_auditivos.textContent)){
            quantidade_ausencia_vagas_estacionamento_preferenciais.textContent = parseInt(total_deficientes_auditivos.textContent);
        }
        // visuais
        if (parseInt(quantidade_ausencia_piso_podotactil.textContent) > parseInt(total_deficientes_visuais.textContent)){
            quantidade_ausencia_piso_podotactil.textContent = parseInt(total_deficientes_visuais.textContent);
        }
        if (parseInt(quantidade_podotactil_danificado.textContent) > parseInt(total_deficientes_visuais.textContent)){
            quantidade_podotactil_danificado.textContent = parseInt(total_deficientes_visuais.textContent);
        }
        if (parseInt(quantidade_calcada_esburacada_visual.textContent) > parseInt(total_deficientes_visuais.textContent)){
            quantidade_calcada_esburacada_visual.textContent = parseInt(total_deficientes_visuais.textContent);
        }
        if (parseInt(quantidade_ausencia_marcacao_braile.textContent) > parseInt(total_deficientes_visuais.textContent)){
            quantidade_ausencia_marcacao_braile.textContent = parseInt(total_deficientes_visuais.textContent);
        }
        if (parseInt(quantidade_calcada_obstruida.textContent) > parseInt(total_deficientes_visuais.textContent)){
            quantidade_calcada_obstruida.textContent = parseInt(total_deficientes_visuais.textContent);
        }
        calcula_percentual_tabelas();
    }

    function calcula_percentual_tabelas(){
        calcula_percentual(quantidade_rampa_destruida, total_deficientes_fisicos, percentual_rampa_destruida);
        calcula_percentual(quantidade_ausencia_de_rampa, total_deficientes_fisicos, percentual_ausencia_de_rampa);
        calcula_percentual(quantidade_calcada_estreita, total_deficientes_fisicos, percentual_calcada_estreita);
        calcula_percentual(quantidade_calcada_esburacada_fisico, total_deficientes_fisicos, percentual_calcada_esburacada_fisico);
        calcula_percentual(quantidade_rua_ingrime, total_deficientes_fisicos, percentual_rua_ingrime);
        calcula_percentual(quantidade_ausencia_vagas_estacionamento, total_deficientes_fisicos, percentual_ausencia_vagas_estacionamento);
        calcula_percentual(quantidade_ausencia_alerta_visual_emergencia, total_deficientes_auditivos, percentual_ausencia_alerta_visual_emergencia);
        calcula_percentual(quantidade_ausencia_placa_informativa_da_rua, total_deficientes_auditivos, percentual_ausencia_placa_informativa_da_rua);
        calcula_percentual(quantidade_ausencia_vagas_estacionamento_preferenciais, total_deficientes_auditivos, percentual_ausencia_vagas_estacionamento_preferenciais);
        calcula_percentual(quantidade_ausencia_piso_podotactil, total_deficientes_visuais, percentual_ausencia_piso_podotactil);
        calcula_percentual(quantidade_podotactil_danificado, total_deficientes_visuais, percentual_podotactil_danificado);
        calcula_percentual(quantidade_calcada_esburacada_visual, total_deficientes_visuais, percentual_calcada_esburacada_visual);
        calcula_percentual(quantidade_ausencia_marcacao_braile, total_deficientes_visuais, percentual_ausencia_marcacao_braile);
        calcula_percentual(quantidade_calcada_obstruida, total_deficientes_visuais, percentual_calcada_obstruida);
    }

    function calcula_percentual(quantidade_notificacoes, total_notificacoes, percentual){
        let quantidade = parseInt(quantidade_notificacoes.textContent);
        let total = parseInt(total_notificacoes.textContent);
        let resultado = 0;
        if (total > 0){    
            resultado = parseFloat(((quantidade * 100) / total).toFixed(2));
        }
        percentual.textContent = resultado;
    }

    function adicionar(tag_quantidade, tag_quantidade_total){
        quantiaAtual = parseInt(tag_quantidade.textContent) + 1;
        if (quantiaAtual >= parseInt(tag_quantidade_total.textContent)){
            tag_quantidade.textContent = parseInt(tag_quantidade_total.textContent);
        } else {
            tag_quantidade.textContent = quantiaAtual;
        }
        verifica_notificacao_maxima();
    }

    function diminuir(tag_quantidade){
        quantiaAtual = parseInt(tag_quantidade.textContent) - 1;
        if (quantiaAtual < 0){
            tag_quantidade.textContent = parseInt(0);
        } else {
            tag_quantidade.textContent = quantiaAtual;
        }
        verifica_notificacao_maxima();
    }

}