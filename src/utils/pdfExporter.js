import jsPDF from 'jspdf';

/**
 * Utilitário para exportação de roteiros em formato PDF.
 * Formato em tópicos:
 *  1. Nome do Local (em negrito)
 *     Endereço: [Endereço completo]
 *     Como Chegar / Metrô: [Linhas de metrô e instruções de trajeto]
 */

// Configurações de layout (A4 em mm)
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_LEFT = 20;
const MARGIN_RIGHT = 20;
const MARGIN_TOP = 25;
const MARGIN_BOTTOM = 22;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 170mm

/**
 * Renderiza o cabeçalho de um dia no documento PDF.
 */
function renderDayHeader(doc, day, cityName, y) {
  // Faixa decorativa superior
  doc.setFillColor(30, 41, 59); // Slate 800
  doc.roundedRect(MARGIN_LEFT, y, CONTENT_WIDTH, 22, 2, 2, 'F');

  // Cidade e Dia
  doc.setTextColor(245, 158, 11); // Âmbar / Gold
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  const cityLabel = (cityName || 'Barcelona').toUpperCase();
  doc.text(`${cityLabel} • DIA ${day.dayNumber}`, MARGIN_LEFT + 6, y + 8);

  // Título e Data
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.text(day.title || `Dia ${day.dayNumber}`, MARGIN_LEFT + 6, y + 16);

  // Data à direita
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225); // Slate 300
  if (day.date) {
    doc.text(day.date, PAGE_WIDTH - MARGIN_RIGHT - 6, y + 12, { align: 'right' });
  }

  return y + 28;
}

/**
 * Renderiza o rodapé da página.
 */
function renderFooter(doc, pageNum, totalPages) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184); // Slate 400

  // Linha sutil separadora
  doc.setDrawColor(226, 232, 240); // Slate 200
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, PAGE_HEIGHT - 16, PAGE_WIDTH - MARGIN_RIGHT, PAGE_HEIGHT - 16);

  const footerText = 'Roteiro de Viagem • Nome, Endereço e Linhas de Metrô';
  doc.text(footerText, MARGIN_LEFT, PAGE_HEIGHT - 10);

  const pageStr = totalPages ? `Página ${pageNum} de ${totalPages}` : `Página ${pageNum}`;
  doc.text(pageStr, PAGE_WIDTH - MARGIN_RIGHT, PAGE_HEIGHT - 10, { align: 'right' });
}

/**
 * Adiciona o conteúdo de um dia ao documento PDF.
 */
function addDayToDoc(doc, day, cityName, isFirstPage = false) {
  if (!isFirstPage) {
    doc.addPage();
  }

  let y = MARGIN_TOP;
  y = renderDayHeader(doc, day, cityName, y);

  const attractions = day.attractions || [];

  attractions.forEach((attraction, index) => {
    // Estimativa de altura necessária para o bloco da atração
    const itemNumber = `${index + 1}. `;
    const nameText = `${itemNumber}${attraction.name}`;
    const addressText = attraction.address || 'Endereço sob consulta no mapa';
    const metroText = attraction.metroLines || attraction.routeFromHotel || 'Metrô e caminhada a pé';

    // Medir quebras de linha
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    const nameLines = doc.splitTextToSize(nameText, CONTENT_WIDTH - 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    const addressLines = doc.splitTextToSize(`Endereço: ${addressText}`, CONTENT_WIDTH - 12);
    const metroLines = doc.splitTextToSize(`Como chegar: ${metroText}`, CONTENT_WIDTH - 12);

    const neededHeight = (nameLines.length * 5) + (addressLines.length * 4.5) + (metroLines.length * 4.5) + 14;

    // Quebra de página se exceder o limite
    if (y + neededHeight > PAGE_HEIGHT - MARGIN_BOTTOM - 10) {
      doc.addPage();
      y = MARGIN_TOP;
      // Pequeno cabeçalho de continuação
      doc.setFillColor(248, 250, 252);
      doc.rect(MARGIN_LEFT, y, CONTENT_WIDTH, 8, 'F');
      doc.setTextColor(100, 116, 139);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(`CONTINUAÇÃO — ${cityName.toUpperCase()} • DIA ${day.dayNumber} (${day.date})`, MARGIN_LEFT + 4, y + 5.5);
      y += 14;
    }

    // Caixa de fundo suave para cada atração (estilo cartão em tópicos)
    const cardHeight = (nameLines.length * 5) + (addressLines.length * 4.5) + (metroLines.length * 4.5) + 10;
    doc.setFillColor(250, 250, 250);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.roundedRect(MARGIN_LEFT, y, CONTENT_WIDTH, cardHeight, 1.5, 1.5, 'FD');

    // 1. Nome do Local (Negrito)
    let currentY = y + 5.5;
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.text(nameLines, MARGIN_LEFT + 4, currentY);
    currentY += (nameLines.length * 5) + 1;

    // 2. Endereço (embaixo do nome)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105); // Slate 600
    // Pequeno marcador visual de texto
    doc.text(addressLines, MARGIN_LEFT + 6, currentY);
    currentY += (addressLines.length * 4.5) + 1;

    // 3. Como chegar / Linhas de metrô
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(14, 116, 144); // Cyan/Teal 700 para destaque de transporte
    doc.text(metroLines, MARGIN_LEFT + 6, currentY);

    y += cardHeight + 4;
  });
}

/**
 * Baixa o PDF de um único dia.
 * @param {Object} day - Dados do dia
 * @param {string} cityName - Nome da cidade (ex: "Barcelona" ou "Madrid")
 */
export function downloadDayPDF(day, cityName = 'Barcelona') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  addDayToDoc(doc, day, cityName, true);

  // Numeração de páginas no rodapé
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    renderFooter(doc, i, pageCount);
  }

  const safeCity = cityName.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const filename = `Roteiro_${safeCity}_Dia_${day.dayNumber}.pdf`;
  doc.save(filename);
}

/**
 * Baixa os 3 roteiros de Barcelona (ou lista de dias fornecida) em um único arquivo PDF.
 * @param {Array} days - Lista de dias
 * @param {string} cityName - Nome da cidade
 * @param {string} customTitle - Título do arquivo
 */
export function downloadAllDaysPDF(days, cityName = 'Barcelona', customTitle = 'Roteiro_3_Dias_Barcelona.pdf') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  days.forEach((day, index) => {
    addDayToDoc(doc, day, cityName, index === 0);
  });

  // Numeração de páginas no rodapé
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    renderFooter(doc, i, pageCount);
  }

  doc.save(customTitle);
}
